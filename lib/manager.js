const Employee = require("./employee");

// add Manager as subclass of Employee, with modified role and additional property of "officNumber"
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        console.log(this.officeNumber);
    }

    getRole() {
        console.log("Manager");
    }
}

module.exports = Manager;