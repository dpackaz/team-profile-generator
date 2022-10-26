const Employee = require("./employee");

// add Engineer as subclass of Employee, with modified role and additional property of "github"
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    getGithub() {
        console.log(this.github);
    }

    getRole() {
        console.log("Engineer");
    }
}

module.exports = Engineer;