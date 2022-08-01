const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./src/genhtml");
var team = [];

const managerQuestions = [
  {
    type: "input",
    name: "nameManager",
    message: "What is manager's name?",
  },
  {
    type: "input",
    name: "idManager",
    message: "What is manager's ID?",
  },
  {
    type: "input",
    name: "emailManager",
    message: "What is manager's email?",
  },
  {
    type: "input",
    name: "numberManager",
    message: "What is manager's office number?",
  },

  {
    type: "list",
    name: "addMember",
    message: "Do you want to add another team member?",
    choices: ["Engineer", "Intern", "No, I'm finished"],
  },
];

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "nameEngineer",
        message: "What is engineer's name?",
      },
      {
        type: "input",
        name: "idEngineer",
        message: "What is engineer's ID?",
      },
      {
        type: "input",
        name: "emailEngineer",
        message: "What is engineer's email?",
      },
      {
        type: "input",
        name: "githubEngineer",
        message: "What is engineer's github?",
      },

      {
        type: "list",
        name: "addMember",
        message: "Do you want to add another team member?",
        choices: ["Engineer", "Intern", "No, I'm finished"],
      },
    ])
    .then((response) => {
      team.push(
        new Engineer(
          response.nameEngineer,
          response.idEngineer,
          response.emailEngineer,
          response.githubEngineer
        )
      );
      if (response.addMember === "Engineer") {
        addEngineer();
      } else if (response.addMember === "Intern") {
        addIntern();
      } else {
        console.log(team);
        var htmlData = generateHTML(team);
        writeToFile("./index.html", htmlData);
      }
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "nameIntern",
        message: "What is intern's name?",
      },
      {
        type: "input",
        name: "idIntern",
        message: "What is intern's ID?",
      },
      {
        type: "input",
        name: "emailIntern",
        message: "What is intern's email?",
      },
      {
        type: "input",
        name: "schoolIntern",
        message: "What school does intern attend?",
      },

      {
        type: "list",
        name: "addMember",
        message: "Do you want to add another team member?",
        choices: ["Engineer", "Intern", "No, I'm finished"],
      },
    ])
    .then((response) => {
      team.push(
        new Intern(
          response.nameIntern,
          response.idIntern,
          response.emailIntern,
          response.schoolIntern
        )
      );
      if (response.addMember === "Engineer") {
        addEngineer();
      } else if (response.addMember === "Intern") {
        addIntern();
      } else {
        console.log(team);
        var htmlData = generateHTML(team);
        writeToFile("./index.html", htmlData);
      }
    });
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

function init() {
  inquirer.prompt(managerQuestions).then((response) => {
    team.push(
      new Manager(
        response.nameManager,
        response.idManager,
        response.emailManager,
        response.numberManager
      )
    );
    if (response.addMember === "Engineer") {
      addEngineer();
    } else if (response.addMember === "Intern") {
      addIntern();
    } else {
      console.log(team);
      var htmlData = generateHTML(team);
      writeToFile("./index.html", htmlData);
    }
  });
}

init();
