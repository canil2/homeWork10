let employee_test = require("./employee");

// let util = require("util");
// let github;
// engineer.prototype.details = function () {
//   return github;
// };
// engineer.prototype.getRole = function () {
//   return "engineer";
// };
// util.inherits(engineer, employee_test);
// function engineer() {}
// engineer.prototype.setdata = function (names, ids, emails, githubs) {
//   engineer.super_.prototype.setdataemployee(names, ids, emails);

//   github = githubs;
// };

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
