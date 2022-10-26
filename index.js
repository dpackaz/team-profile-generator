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
        name: "name",
        message: "What is the team manager's name?"
    },
    {
        name: "id",
        message: "What is the team manager's ID number?"
    },
    {
        name: "email",
        message: "What is the team manager's email address?"
    },
    {
        name: "office",
        message: "What is the team manager's office number?"
    },
];

// create question for new employee type
const newEmployeeQuestion = [
    {
        type: "list",
        name: "position",
        message: "What is the new team member's position?",
        choices: ["Engineer", "Intern", "I'm finished. Complete my team."]
    },
];

// create questions for new engineer
const engineerQuestions = [
    {
        name: "name",
        message: "What is the new engineer's name?"
    },
    {
        name: "id",
        message: "What is the new engineer's ID number?"
    },
    {
        name: "email",
        message: "What is the new engineer's email address?"
    },
    {
        name: "github",
        message: "What is the new engineer's GitHub username?"
    },
];
// create questions for new intern
const internQuestions = [
    {
        name: "name",
        message: "What is the new intern's name?"
    },
    {
        name: "id",
        message: "What is the new intern's ID number?"
    },
    {
        name: "email",
        message: "What is the new intern's email address?"
    },
    {
        name: "school",
        message: "What school does/did the new intern attend?"
    },
];

// create a function that will modify new employee questions based on new employee's position
function determineEmployeeQuestions() {
    inquirer.prompt(newEmployeeQuestion)
    .then((response) => {
        let selectedPosition = response.position;
        if (selectedPosition === "Engineer") {
            askEngineerQuestions();
        }   else if (selectedPosition === "Intern") {
            askInternQuestions();
        }   else if (selectedPosition === "I'm finished. Complete my team.") {
            writeToFile("myTeam.html", generateHtml(teamMembers));
        }
    });
}

// create a function to ask user questions to generate new manager object
function askManagerQuestions() {
    inquirer.prompt(managerQuestions)
    .then((response) => {
        const addManager = new Manager(
            response.name,
            response.id,
            response.email,
            response.office
        );
        teamMembers.push(addManager);
        determineEmployeeQuestions();
    });
}

// create a function to ask user questions to generate new engineer object
function askEngineerQuestions() {
    inquirer.prompt(engineerQuestions)
    .then((response) => {
        const addEngineer = new Engineer(
            response.name,
            response.id,
            response.email,
            response.github
        );
        teamMembers.push(addEngineer);
        determineEmployeeQuestions();
    });
}

// create a function to ask user questions to generate new intern object
function askInternQuestions() {
    inquirer.prompt(internQuestions)
    .then((response) => {
        const addIntern = new Intern(
            response.name,
            response.id,
            response.email,
            response.school
        );
        teamMembers.push(addIntern);
        determineEmployeeQuestions();
    });
}

// create a function to write the file and display error or success message on completion
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Successfully generated team profile!")
    );
}

// create function to initialize application
function init() {
    askManagerQuestions();
}

// call init function
init();
