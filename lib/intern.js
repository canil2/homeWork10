let employee_test = require("./employee");
// let util = require("util");
// let school;
// intern.prototype.getSchool = function () {
//   return school;
// };
// intern.prototype.getRole = function () {
//   return "intern";
// };
// util.inherits(intern, employee_test);
// function intern() {}
// intern.prototype.setdata = function (names, ids, emails, schools) {
//   intern.super_.prototype.setdataemployee(names, ids, emails);

//   school = schools;
// };

class intern extends employee_test {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = intern;
