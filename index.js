//Packages needed for this application
const inquirer = require('inquirer');
const markDown = require('./utils/generateMarkdown.js');
const fs = require('fs');
//Array of questions for user input
const questions = ['What is the name of your project? ', 'Please describe the project: ', 'What are the installation instructions? ',
                   'What is the usage information? ', 'What license are you using?', 'Please provide contribution guidelines: ', 'What are the test instructions? '];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const file = `${fileName.toLowerCase().split(' ').join(' ')}.md`;
    const writtenStuff = markDown.generateMarkdown(data);
    fs.writeFile(file, writtenStuff, (err) =>
    err ? console.log(err) : console.log('Title')
    )
    // fs.appendFile(file, descTitle, (err) =>
    // err ? console.log(err) : console.log('Description Title')
    // )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: questions[0]
            },
            {
                type: 'input',
                name: 'desc',
                message: questions[1]
            },
            // {
            //     type: 'input',
            //     name: 'install',
            //     message: questions[2]
            // },
            // {
            //     type: 'input',
            //     name: 'usage',
            //     message: questions[3]
            // },
             {
                 type: 'list',
                 name: 'license',
                 message: questions[4],
                 choices: ['MIT', 'Apache', 'Boost', 'BSD']
             },
            // {
            //     type: 'input',
            //     name: 'contribution',
            //     message: questions[5]
            // },
            // {
            //     type: 'input',
            //     name: 'test',
            //     message: questions[6]
            // },
        ])
        .then((data) => {
            //console.log(data.name);
            console.log(data.license);
            writeToFile(data.name, data);
        })
}

// Function call to initialize app
init();
