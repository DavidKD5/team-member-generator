const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./src/genhtml");
var team = [];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is manager's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is manager's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is manager's email?",
  },
  {
    type: "input",
    name: "other",
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
        name: "name",
        message: "What is engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is engineer's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is engineer's email?",
      },
      {
        type: "input",
        name: "other",
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
        new Engineer(response.name, response.id, response.email, response.other)
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
        name: "name",
        message: "What is intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is intern's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is intern's email?",
      },
      {
        type: "input",
        name: "other",
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
        new Intern(response.name, response.id, response.email, response.other)
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
      new Manager(response.name, response.id, response.email, response.other)
    );
    console.log(team);
    if (response.addMember === "Engineer") {
      addEngineer();
    } else if (response.addMember === "Intern") {
      addIntern();
    } else {
      var htmlData = generateHTML(team);
      writeToFile("./index.html", htmlData);
    }
  });
}

init();
