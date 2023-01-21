// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if(license === 'MIT'){
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
   }  else{
    return '';
   }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license === 'MIT'){
        return '[MIT](https://opensource.org/licenses/MIT)';
       }  else{
        return '';
       }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `This project is licensed under the ${renderLicenseLink(license)} license\n`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}\n
  ${renderLicenseBadge(data.license)}\n
  ## Description\n
  ${data.desc}\n
  ## License\n
  ${renderLicenseSection(data.license)}\n
  `.replaceAll('  ', '');
}

module.exports = {generateMarkdown};