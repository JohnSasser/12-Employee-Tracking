const initQue = [
	{
		type: "list",
		message: "What would you like to do?",
		name: "firstQue",
		choices: [
			"VIEW ALL STAFF",
			"ADD: EMPLOYEE, DEPARTMENT, ROLE",
			"REMOVE: EMPLOYEE, DEPARTMENT, ROLE",
			"CHANGE EMPLOYEE'S: ROLE, MANAGER"
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
	},
	{
		type: "input",
		message: "What is the employee's role ID?",
		name: "role_id"
	},
	{
		type: "input",
		message: "What is their managers ID?",
		name: "role"
	}
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
		name: "roleSalary"
	},
	{
		type: "input",
		message: "What is the department ID for the role?",
		name: "roleDep_id"
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
		message: "What is the employee's name, that you wish to change?",
		name: "empName"
	},
	{
		type: "input",
		message: "What department do you wish to change?",
		name: "department"
	},
	{
		type: "input",
		message: "What is the role, you wish to change?",
		name: "role"
	}
];

// object literal
module.exports = {
	initQue,
	addEmp,
	addQue,
	addDepartmet,
	addRole,
	rmvQue,
	cngQue
};
