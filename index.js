// packages needed for application
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML.js");
const manager = require("./lib/manager.js");
const engineer = require("./lib/engineer.js");
const intern = require("./lib/intern.js");

// array to store new team members as they are added
const teamMembers = [];

// create questions for manager (first input when beginning the application)
const managerQuestions = [
    {
        name: "Name",
        message: "What is the team manager's name?"
    },
    {
        name: "ID",
        message: "What is the team manager's ID number?"
    },
    {
        name: "Email",
        message: "What is the team manager's email address?"
    },
    {
        name: "Office",
        message: "What is the team manager's office number?"
    },
];

// create question for new employee type
const newEmployeeQuestion = [
    {
        type: "list",
        name: "Position",
        message: "What is the new team member's position?",
        choices: ["Engineer", "Intern", "I'm finished. Complete my team."]
    },
];

// create questions for new engineer
const engineerQuestions = [
    {
        name: "Name",
        message: "What is the new engineer's name?"
    },
    {
        name: "ID",
        message: "What is the new engineer's ID number?"
    },
    {
        name: "Email",
        message: "What is the new engineer's email address?"
    },
    {
        name: "Github",
        message: "What is the new engineer's GitHub username?"
    },
];
// create questions for new intern
const internQuestions = [
    {
        name: "Name",
        message: "What is the new intern's name?"
    },
    {
        name: "ID",
        message: "What is the new intern's ID number?"
    },
    {
        name: "Email",
        message: "What is the new intern's email address?"
    },
    {
        name: "School",
        message: "What school does the new intern attend?"
    },
];



const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>About Me <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">${answers.name}</li>
      <li class="list-group-item"${answers.getRole()}</li>

      <li class="list-group-item">ID: ${answers.id}</li>
      <li class="list-group-item">Email: ${answers.email}</li>
      <li class="list-group-item">Office Number: ${answers.getOfficeNumber()}</li>
    </ul>
  </div>
</div>
</body>
</html>`;



// // Create questions for other employees
// const newEmployeeQuestions = [
//     {

//     }
// ]