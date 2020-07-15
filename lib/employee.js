class employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }
  getID() {
    console.info("id", this.id);
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

// employee.prototype.getName = function () {
//   return employee.prototype.name;
// };

// employee.prototype.getID = function () {
//   return employee.prototype.id;
// };
// employee.prototype.getEmail = function () {
//   return employee.prototype.email;
// };

// employee.prototype.getRole = function () {
//   return "employee";
// };

// employee.prototype.setdataemployee = function (names, ids, emails) {
//   employee.prototype.name = names;
//   employee.prototype.id = ids;
//   employee.prototype.email = emails;
// };
// function employee() {}
module.exports = employee;
