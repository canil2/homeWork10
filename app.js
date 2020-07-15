var inquirer_test = require("inquirer");
var manager_test = require("./lib/manager");
var intern_test = require("./lib/intern");
var engineer_test = require("./lib/engineer");
var fs_test = require("fs").promises;
let managerNumber = 0;
let interns = [];
let engineers = [];
let managers;
function takeManagerInput() {
  inquirer_test
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your name Managers:",
      },
      {
        type: "number",
        name: "managerId",
        message: "What is your ID:",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your email:",
      },
      {
        type: "input",
        name: "mOfficeNumber",
        message: "What is your office number:",
      },
    ])
    .then(function (answers) {
      manager_test10 = new manager_test(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.mOfficeNumber
      );
      managers = manager_test10;
      console.log(manager_test10.getName());
      prompt_test(test_question);
      //console.log(manager_test10.details());
    });
}

function takeEngineerInput() {
  inquirer_test
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your Enginerr name:",
      },
      {
        type: "number",
        name: "engineerId",
        message: "What is your ID:",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your email:",
      },
      {
        type: "input",
        name: "githubNumber",
        message: "What is your github number:",
      },
    ])
    .then(function (answers) {
      engineer_test10 = new engineer_test(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.githubNumber
      );
      engineers.push(engineer_test10);
      console.log(engineers[0].getName());
      prompt_test(test_question);
      //console.log(engineer_test10.details());
    });
}

function takeInternInput() {
  inquirer_test
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your Intern name:",
      },

      {
        type: "number",
        name: "internId",
        message: "What is your Intern ID:",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your Intern email:",
      },
      {
        type: "input",
        name: "schoolName",
        message: "What is your school name",
      },
    ])
    .then(function (answers) {
      intern_test10 = new intern_test(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.schoolName
      );

      interns.push(intern_test10);
      console.log(intern_test10.getName());
      console.log(engineers[0].getName());
      console.log(engineers[0]);

      prompt_test(test_question);
      //console.log(intern_test10.details());
    });
}
async function generatehtml() {
  let engineerHTML = "";

  let data = await fs_test.readFile("./templates/manager.html", {
    encoding: "utf8",
  });

  data = data
    .replace("{position}", managers.getRole())
    .replace("{name}", managers.getName())
    .replace("{ID}", managers.getID())
    .replace("{EMAIL}", managers.getEmail())
    .replace("{officeNumber}", managers.details());

  engineerHTML += data + "<br>";

  for (let engineer of engineers) {
    console.log(engineer.getName());

    let data = await fs_test.readFile("./templates/engineer.html", {
      encoding: "utf8",
    });
    data = data
      .replace("{position}", engineer.getRole())
      .replace("{name}", engineer.getName())
      .replace("{ID}", engineer.getID())
      .replace("{EMAIL}", engineer.getEmail())
      .replace("{UserName}", engineer.details());

    engineerHTML += data + "<br>";
  }

  for (let intern of interns) {
    console.log(intern.getName());

    let data = await fs_test.readFile("./templates/intern.html", {
      encoding: "utf8",
    });
    data = data
      .replace("{position}", intern.getRole())
      .replace("{name}", intern.getName())
      .replace("{ID}", intern.getID())
      .replace("{EMAIL}", intern.getEmail())
      .replace("{schoolName}", intern.getSchool());

    engineerHTML += data + "<br>";
  }
  console.log("end", engineerHTML);

  let output = await fs_test.readFile("./templates/main.html", {
    encoding: "utf8",
  });

  output = output.replace("{TEAM}", engineerHTML);
  await fs_test.writeFile("./output/roster.html", output, { encoding: "utf8" });
}
let test_question = {
  type: "input",
  name: "teammemberName",
  message: "Type M for Manager, E for Engineer and I for Intern and Q to quit:",
};

var prompt_test = function (question) {
  inquirer_test
    .prompt(question)

    .then(function (answers) {
      if (answers.teammemberName === "M" && managerNumber < 1) {
        takeManagerInput();
        managerNumber++;
      } else if (answers.teammemberName === "M" && managerNumber >= 1) {
        console.info("Only one Manager is allowed");
        prompt_test(test_question);
      } else if (answers.teammemberName === "E") {
        takeEngineerInput();
      } else if (answers.teammemberName === "I") {
        takeInternInput();
      } else if (answers.teammemberName === "Q" && managerNumber > 0) {
        generatehtml();
        //console.log(answers);
      } else {
        console.log("please enter a valid input or manager details is missing");
        prompt_test(test_question);
      }
    });
};
prompt_test(test_question);
//console.log(prompt_test);
