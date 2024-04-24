// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const getLicenseBadge = require('./utils/getLicenseBadge');
// TODO: Create an array of questions for user input
const questions = [
        {
            name: 'description',
            message: 'Describe your project.'
        },
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
        {
            type: 'list',
            name: 'license',
            message: 'which license would you like to add?',
            choices: ['MIT','ODbl','IPL']
           
        },
]
    
const readmeContent = (answers) =>`
# Project README

## Description
${answers.description}

## Your Motivation
${answers.motivation}

## About your Project
${answers.project}

## Problem's Solved
${answers.problem}

## What did you Learn
${answers.learn}

## Standout Feature
${answers.standout}

## License
${getLicenseBadge(answers.license)}
 `;

    function init (listOfQuestions){
        inquirer
        .prompt(listOfQuestions)
        .then(answers => {
                fs.writeFile('README.md',       readmeContent(answers)
                , (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('README.md file created successfully!');
                    }
                });
        });
    }

    init(questions);
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();