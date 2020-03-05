const mysql = require("mysql");
const inquirer = require("inquirer");
const table = require("console.table");
const questions = require("./lib/questions");

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "company_db"
});

// create the connection and check for errors;
connection.connect(err => {
	if (err) {
		console.error(`error connecting: ${err.stack}`);
		return;
	}
	// console.log(`connected as id ${connection.threadId}`);
});

// defining functions to run the app.
function add() {
	inquirer
		.prompt(questions.addQue)
		.then(answer => {
			// primary(answer);
			switch (answer.whichAdd) {
				case "ADD: EMPLOYEE":
					connection.query(`SELECT id, title FROM role`, function(err, res) {
						if (err) throw err;

						const q = questions.addEmp;

						const newQuestion = {
							type: "list",
							message: "What is the employee's role?",
							name: "role_dep",
							choices: res.map(row => row.title) //['sales', ...]
						};

						q.push(newQuestion);

						inquirer.prompt(questions.addEmp).then(empAnswers => {
							// string values must have "", or additional `` around template literal to represent a string value;

							const role_id = res.find(row => row.title === empAnswers.role_dep)
								.id;

							let addedEmp = `'${empAnswers.empFirstName}', '${empAnswers.empLastName}', '${empAnswers.role_dep}', ${role_id}`;

							connection.query(
								`INSERT INTO employee (first_name, last_name, role, role_id) VALUES (${addedEmp})`,
								function(error, rows) {
									if (error) throw error;

									init();
								}
							);
						});
					});
					return;

				case "ADD: DEPARTMENT":
					inquirer.prompt(questions.addEmp).then(depAnswers => {
						// string values must have "", or additional `` around template literal to represent a string value;
						let addedDep = `'${depAnswers.depName}'`;

						console.log(addedDep);

						connection.query(
							`INSERT INTO department (id, name) VALUES (${addedDep})`,
							function(error, rows) {
								if (error) throw error;

								init();
							}
						);
					});
					return;

				case "ADD: ROLE":
					inquirer.prompt(questions.addEmp).then(roleAnswers => {
						// string values must have "", or additional `` around template literal to represent a string value;
						let addedRole = `'${roleAnswers.roleTitle}', ${roleAnswers.roleSalary}, ${roleAnswers.roleDep_id}`;

						console.log(addedRole);

						connection.query(
							`INSERT INTO role (title, salary, department_id) VALUES (${addedRole})`,
							function(error, rows) {
								if (error) throw error;

								init();
							}
						);
					});
					return;
			}
		})
		.catch(err => {
			console.log(err);
		});
}

function remove() {
	inquirer.prompt(questions.rmvQue).then(answer => {
		primary(answer);
	});
}

function change() {
	console.log("\n");
	connection.query("SELECT * FROM employee", (err, res) => {
		if (err) throw err;

		const colNames = Object.keys(res[0]);

		console.log(`-- press arrow key for next selection --`);

		inquirer
			.prompt({
				// prompt for the dataPacket, and select the names from dataRow;
				name: "character",
				type: "rawlist",
				message: "What entry would you like to make a change on?",
				choices: function() {
					return res.map(item => {
						return `${item.first_name} ${item.last_name}`;
					});
				}
			})
			.then(answer1 => {
				// console.log(answer1);

				inquirer
					.prompt([
						// prompt for the column to update;
						{
							type: "list",
							message: "Which column do you want to update?",
							name: "whichCol",
							choices: colNames
						},
						// prompt for the new value;
						{
							type: "input",
							message: "What the new value?",
							name: "newVal"
						}
					])
					.then(answer2 => {
						// console.log(answer2);

						// lastName is pulled from the selection in the
						// character prompt and split, then selecting
						// the second index {item.last_name};
						let lastName = answer1.character.split(" ")[1];

						// set the id to be of higher scope than the
						// foreach loop where it is collected;
						let id;

						res.forEach(dataRow => {
							if (dataRow.last_name == lastName) {
								id = dataRow.id;
								console.log(dataRow);
							}
						});

						// UPDATE query with WHERE clause to define
						// which obj/dataRow to rewrite;
						console.log(answer2.whichCol);
						connection.query(
							`UPDATE employee SET ${answer2.whichCol} = ? WHERE id = ?`,
							[answer2.newVal, id],
							(err, res) => {
								if (err) throw err;
								console.log(res);
							}
						);
					});
			});
	});
}

function viewStaff() {
	inquirer
		.prompt(questions.viewQue)
		.then(answer => {
			switch (answer.view) {
				case "VIEW ALL EMPLOYEES":
					connection.query("SELECT * FROM employee", (err, res) => {
						if (err) throw err;
						console.table("\n", res);
						console.log(`-- press arrow key for next selection --`);
					});
					init();
					return;

				case "VIEW ALL DEPARTMENTS":
					connection.query("SELECT * FROM department", (err, res) => {
						if (err) throw err;
						console.table("\n", res);
						console.log(`-- press arrow key for next selection --`);
					});

					init();
					return;

				case "VIEW ALL ROLES":
					connection.query("SELECT * FROM role", (err, res) => {
						if (err) throw err;
						console.table("\n", res);
						console.log(`-- press arrow key for next selection --`);
					});

					init();
					return;
			}
		})
		.catch(err => {
			console.log(err);
		});
}

function primary(answer) {
	switch (answer.firstQue) {
		case "ADD: EMPLOYEE, DEPARTMENT, ROLE":
			// add case
			add();
			break;
		case "REMOVE: EMPLOYEE, DEPARTMENT, ROLE":
			// remove case
			remove();
			break;
		case "VIEW ALL STAFF":
			// view case
			viewStaff();
			break;
		case "CHANGE: EMPLOYEE's ROLE":
			// change case
			change();
			break;
	}
}

// initialize function to start the first inquirer;
function init() {
	inquirer.prompt(questions.initQue).then(answer => {
		primary(answer);
	});
}

init();
