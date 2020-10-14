// array of questions for user
const questions = [
  {
    type: "input",
    message: "Please enter the project title",
    name: "title"
  }
  {
    type: "input",
    message: "Please enter a description of the project",
    name: "description"
  }  
  {
    type: "input",
    message: "Please enter a table of contents",
    name: "tableOfContents"
  }
  {
    type: "input",
    message: "Please enter installation instructions",
    name: "installation"
  }  
  {
    type: "input",
    message: "Please enter any usage instructions",
    name: "usage"
  }
  {
    type: "input",
    message: "Please select a liscence, if applicable",
    name: "liscence",
    choices : ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"]
  }  
  {
    type: "input",
    message: "Please enter any contributors",
    name: "contributors"
  }
  {
    type: "input",
    message: "Please enter any tests",
    name: "tests"
  }  
  {
    type: "input",
    message: "Please enter any questions",
    name: "questions"
  }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
