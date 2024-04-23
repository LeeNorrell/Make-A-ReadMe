// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            name: 'motivation',
            message: 'What was your motivation?'
        },
        {
            name: 'project',
            message: 'Why did you build this project?'
        },
        {
            name: 'problem',
            message:'What problem does it solve?'
        },
        {
            name: 'learn',
            message:'What did you learn?'
        },
        {
            name: 'standout',
            message: 'What makes your project stand out?'
        },
    ])
    .then(answers => {
        const readmeContent = `
        #Project README

        ## Motivation
        ${answers.motivation}

        ## Project
        ${answers.project}

        ## Problem Solved
        ${answers.problem}

        ## Learnings
        ${answers.learn}

        ## Standout Feature
        ${answers.standout}
         `;

            fs.writeFile('README.md', readmeContent, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('README.md file created successfully!');
                }
            });
    });
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();