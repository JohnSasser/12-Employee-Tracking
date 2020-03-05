const initQue = [
	{
		type: "list",
		message: "\nWhat would you like to do?\n",
		name: "firstQue",
		choices: [
			"VIEW ALL STAFF",
			"ADD: EMPLOYEE, DEPARTMENT, ROLE",
			// "REMOVE: EMPLOYEE, DEPARTMENT, ROLE",
			"CHANGE: EMPLOYEE's ROLE"
		]
	}
];

const addQue = [
	{
		type: "list",
		message: "What would you like to add?",
		name: "whichAdd",
		choices: ["ADD: EMPLOYEE", "ADD: DEPARTMENT", "ADD: ROLE"]
	}
];

// 	type:
const addEmp = [
	{
		type: "input",
		message: "What is the employee's first name?",
		name: "empFirstName"
	},
	{
		type: "input",
		message: "What is the employee's last name?",
		name: "empLastName"
	}
	// { "list",
	// 	message: "What is the employee's role?",
	// 	name: "role_dep",
	// 	choices: [
	// 		"Sales",
	// 		"Engineer",
	// 		"Marketing",
	// 		"Customer Service",
	// 		"Legal",
	// 		"Finance"
	// 	]
	// 	// NaN validation
	// 	// validate: function(value) {
	// 	// 	if (!isNaN(value) && value > 0) {
	// 	// 		return true;
	// 	// 	}
	// 	// 	return "All ID's should be a number";
	// 	// }
	// }
];

const addDepartmet = [
	{
		type: "input",
		message: "What is the Title for the department?",
		name: "depName"
	}
];

const addRole = [
	{
		type: "input",
		message: "What is the title?",
		name: "roleTitle"
	},
	{
		type: "input",
		message: "What is the role salary?",
		name: "roleSalary",
		// NaN validation
		validate: function(value) {
			if (!isNaN(value) && value > 0) {
				return true;
			}
			return "Salaries should be a number";
		}
	},
	{
		type: "input",
		message: "What is the department ID for the role?",
		name: "roleDep_id",
		// NaN validation
		validate: function(value) {
			if (!isNaN(value) && value > 0) {
				return true;
			}
			return "All ID's should be a number";
		}
	}
];

const viewQue = [
	{
		type: "list",
		message: "What would you like to do?",
		name: "view",
		choices: ["VIEW ALL EMPLOYEES", "VIEW ALL DEPARTMENTS", "VIEW ALL ROLES"]
	}
];

const rmvQue = [
	{
		type: "input",
		message: "What is the employee's ID, that you want to make a change to?",
		name: "empName"
	},
	{
		type: "input",
		message: "What department do you wish to update to?",
		name: "department"
	},
	{
		type: "input",
		message: "What is the role, you wish to update to?",
		name: "role"
	}
];

const cngQue = [
	{
		type: "input",
		message:
			"Enter the first & last name of the employee you would like to change?",
		name: "empName"
	}
];

// object literal
module.exports = {
	initQue,
	addEmp,
	addQue,
	addDepartmet,
	addRole,
	viewQue,
	rmvQue,
	cngQue
};
