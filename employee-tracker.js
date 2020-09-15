const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const promisemysql = require("promise-mysql");

//Connection Properties 
const connectionProperties = {
    host: "localhost",
    port: 0824,
    user: "root",
    password: "password",
    database: "employee_DB"
}

// Creating connection
const connection = mysql.createConnection(connectionProperties);


// Establishing Connection to DB 
connection.connect((err) => {
    // Start Menu Function

    console.log("\n Welcome to Employee Tracker! \n");
    mainMenu()
});

//Main menu function 
function mainMenu() {
    // Prompts
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "Main Menu",
            choices: [
                "View all employee",
                "View all employees by role",
                "View all employees by department",
                "View all employees by manager",
                "Add Employee",
                "Add Role",
                "Add department",
                "Update employee role",
                "Update employee manager",
                "Delete employee",
                "Delete role",
                "Delete department",
                "View department budgets"
            ]
        })
        .then((answer) => {
            // Switch case depending on user option
            switch (answer.action) {
                case "View all employees":
                    viewAllEmp();
                    break;

                case "View all employees by department":
                    viewAllEmpByDept();
                    break;

                case "View all employees by role":
                    viewAllEmpByRole();
                    break;

                case "Add employee":
                    addEmp();
                    break;

                case "Add department":
                    addDept();
                    break;
                case "Add role":
                    addRole();
                    break;
                case "Update employee role":
                    updateEmpRole();
                    break;
                case "Update employee manager":
                    updateEmpMngr();
                    break;
                case "View all employees by manager":
                    viewAllEmpByMngr();
                    break;
                case "Delete employee":
                    deleteEmp();
                    break;
                case "View department budgets":
                    viewDeptBudget();
                    break;
                case "Delete role":
                    deleteRole();
                    break;
                case "Delete department":
                    deleteDept();
                    break;
            }
        });

}