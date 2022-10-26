const Employee = require("./employee");

// add Intern as subclass of Employee, with modified role and additional property of "school"
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    getSchool() {
        console.log(this.school);
    }

    getRole() {
        console.log("Intern");
    }
}

module.exports = Intern;