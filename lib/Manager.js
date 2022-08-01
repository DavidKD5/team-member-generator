const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, other) {
    super(name, id, email);
    this.other = other;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
