let employee_test = require("./employee");

class manager extends employee_test {
  constructor(name, id, email, officenumber) {
    super(name, id, email);
    this.officenumber = officenumber;
  }
  details() {
    return this.officenumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = manager;
