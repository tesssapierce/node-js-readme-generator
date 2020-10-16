const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user
const questions = [
  {
    type: "input",
    message: "Please enter the project title",
    name: "title"
  },
  {
    type: "input",
    message: "Please enter a description of the project",
    name: "description"
  }, 
  {
    type: "input",
    message: "Please enter installation instructions",
    name: "installation"
  }, 
  {
    type: "input",
    message: "Please enter any usage instructions",
    name: "usage"
  },
  {
    type: "list",
    message: "Please select a license, if applicable",
    name: "license",
    choices : ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "none"]
  }, 
  {
    type: "input",
    message: "Please enter any contributors",
    name: "contributors"
  },
  {
    type: "input",
    message: "Please enter any tests",
    name: "tests"
  }, 
  {
    type: "input",
    message: "Please enter your github username",
    name: "username"
  },
  {
    type: "input",
    message: "Please enter your email address",
    name: "emailaddress"
  }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
    if (err) console.log(err)
  })
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(data => {
    writeToFile("sample.md", generateMarkdown(data))
  })
}

// function call to initialize program
init();