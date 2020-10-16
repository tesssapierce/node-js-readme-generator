// function to generate markdown for README
function liscenceBadge(license){
  if (license !== "none"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return "";
}

function generateMarkdown(data) {
  return `# ${data.title}

  ${liscenceBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
​

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  www.github.com/${data.username}

  Reach out to me at ${data.emailaddress} if you have any questions!
`;
}

module.exports = generateMarkdown;
