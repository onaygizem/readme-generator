// Declare the variables and dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const generateReadme = require("./utils/readmeGenerator")


// Function to ask user questions in the command prompt to create README.md
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "Enter your project title",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project"
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation instructions (if any)",
        },
        {
            type: "input",
            name: "usage",
            message: "What is the usage for this project?"
        },
        {
            type: "input",
            name: "contributing",
            message: "List all the contributors of this projects?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there any tests included?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the license for this project: ",
            choices: [
                "Academic",
                "Apache",
                "MIT",
                "ISC",
                "GNU",
                "Open",
                "Mozilla"
            ]
        },
        {
            type: "input",
            name: "questions",
            message: "Please mention any questions you have: "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
}

// Function to generate readme file
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateAnswers = generateReadme(answers);
        fs.writeFile('README.md', generateAnswers, (err) => {
            if (err)
              console.log(err);
            else {
              console.log("File written successfully");
            }
          });
    } catch (err) {
        console.log(err);
    }
}


init();