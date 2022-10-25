// Packages needed for application
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./dist/generateHTML.js");
const employee = require("./lib/employee.js");
const manager = require("./lib/manager.js");
const engineer = require("./lib/engineer.js");
const intern = require("./lib/intern.js");







// Create questions for manager
// const managerQuestions = [
//     {
//         name: "Name",
//         message: "What is the team manager's name?"
//     }
// ]

// // Create questions for other employees
// const newEmployeeQuestions = [
//     {

//     }
// ]