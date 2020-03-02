const mysql = require("mysql");
const inquirer = require("inquirer");
const table = require("console.table");

const questions = require("./lib/questions");

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "company_db"
});

// create the connection and check for errors;
connection.connect(err => {
	if (err) {
		console.error(`error connecting: ${err.stack}`);
		return;
	}

	console.log(`connected as id ${connection.threadId}`);
});

function init() {
	inquirer.prompt(questions.initQue).then(answer => {
		primary(answer);
	});
}

// defining functions to run the app.

function add() {
	inquirer
		.prompt(questions.addQue)
		.then(answer => {
			console.log(`first inquirer inside add();`);
			// primary(answer);
			switch (answer.whichAdd) {
				case "ADD: EMPLOYEE":
					inquirer.prompt(questions.addEmp).then(empAnswers => {
						let addedEmp = `${empAnswers.empFirstName}, ${empAnswers.empLastName}, ${empAnswers.role_id}, ${empAnswers.role}`;

						console.log(addedEmp);

						connection.query(
							`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (${addedEmp})`,
							function(error, rows) {
								if (error) throw error;

								init();
							}
						);
					});

					return;

				case "ADD: DEPARTMENT":
					inquirer.prompt(questions.addEmp).then(depAnswers => {
						let addedDep = `${depAnswers.depName}`;

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
						let addedRole = `${roleAnswers.roleTitle}, ${roleAnswers.roleSalary}, ${roleAnswers.roleDep_id}`;

						console.log(addedRole);

						connection.query(
							`INSERT INTO role (title, salary, department_id) VALUES (${addedRole})`,
							function(error, rows) {
								if (error) throw error;

								// return console.table(rows);
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

function displayStaff() {
	// display the staff here;
}

function change() {
	inquirer.prompt(questions.cngQue).then(answer => {
		primary(answer);
	});
}

function viewStaff() {
	// create questions for employee, role & department

	inquirer
		.prompt(questions.viewQue)
		.then(answer => {
			console.log(`first inquirer inside add();`);
			// primary(answer);
			switch (answer.view) {
				case "VIEW ALL EMPLOYEES":
					connection.query("SELECT * FROM employee", (err, res) => {
						if (err) throw err;
						console.table(res);
						console.log(`press arrow key for next selection`);
					});
					init();
					return;

				case "VIEW ALL DEPARTMENTS":
					connection.query("SELECT * FROM department", (err, res) => {
						if (err) throw err;
						console.table(res);
						console.log(`press arrow key for next selection`);
					});

					init();
					return;

				case "VIEW ALL ROLES":
					connection.query("SELECT * FROM role", (err, res) => {
						if (err) throw err;
						console.table(res);
						console.log(`press arrow key for next selection`);
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
			console.log(`primary();`);
			add();
			break;
		case "REMOVE: EMPLOYEE, DEPARTMENT, ROLE":
			console.log("case 2");
			remove();
			break;
		case "VIEW ALL STAFF":
			viewStaff();

			break;
		case "CHANGE EMPLOYEE'S: ROLE, MANAGER":
			console.log("case 4");
			change();
			break;
	}
}

init();
