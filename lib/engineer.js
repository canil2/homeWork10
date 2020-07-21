let employee_test = require("./employee");

class engineer extends employee_test {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  details() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = engineer;
