// A function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
   if(license === 'MIT'){
    return  '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
   } else if(license ==='Apache'){
     return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
   } else if(license === 'BSD'){
     return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
   } else if (license === 'Boost'){
     return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]';
   } else if (license === 'Mozilla'){
     return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
   } else{
     return '';
   }
}

// A function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
    if(license === 'MIT'){
        return '[MIT](https://opensource.org/licenses/MIT)';
       } else if(license ==='Apache'){
        return '[Apache](https://opensource.org/licenses/Apache-2.0)';
       } else if(license === 'BSD'){
        return '[BSD](https://opensource.org/licenses/BSD-3-Clause)';
       } else if(license === 'Boost'){
        return '[Boost](https://www.boost.org/LICENSE_1_0.txt)';
       } else if(license === 'Mozilla'){
        return '[Mozilla](https://opensource.org/licenses/MPL-2.0)'
       } else{
        return '';
       }
}

//A function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
    if(license === ''){
        return '';
    } else{
        return `This project is licensed under the ${renderLicenseLink(license)} license\n`;
    }
}

//A function that returns the questions section statement
//If there is no contant information provided, returns an empty string
function renderQuestions(email, name, gitHub){
    if(email===''||name===''||gitHub===''){
        return '';
    } else{
        return `If you have any questions about the repo, open an issue or contant me
        directly at ${email}. You can find more of my work at [${name}](${gitHub}).`
    }
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}\n
  ${renderLicenseBadge(data.license)}\n
  ## Description\n
  ${data.desc}\n
  ## Table of Contents\n
  * [Installation](#installation)\n
  * [Usage](#usage)\n
  * [License](#license)\n
  * [Contributing](#contributing)\n
  * [Tests](#tests)\n
  * [Questions](#questions)\n
  ## Installation\n
  \`\`\`
  ${data.install}
  \`\`\`
  ## Usage\n
  ${data.usage}\n
  ## License\n
  ${renderLicenseSection(data.license)}\n
  ## Contributing\n
  ${data.contribution}\n
  ## Tests\n
  To run tests, run the following command:\n
  \`\`\`
  ${data.test}
  \`\`\`
  ## Questions\n
  ${renderQuestions(data.email, data.person, data.gitHub)}\n
  `.replaceAll('  ', '');
}

module.exports = {generateMarkdown};