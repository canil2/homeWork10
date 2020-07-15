let employee_test = require("./employee");
// let util = require("util");
// let officenumber;
// manager.prototype.details = function () {
//   return officenumber;
// };
// manager.prototype.getRole = function () {
//   return "manager";
// };
// util.inherits(manager, employee_test);
// function manager() {}
// manager.prototype.setdata = function (
//   names,
//   ids,
//   emails,
//   positions,
//   officenumbers
// ) {
//   manager.super_.prototype.setdataemployee(names, ids, emails);

//   officenumber = officenumbers;
// };

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
