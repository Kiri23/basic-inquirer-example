const inquirer = require('inquirer');
const questions = [
    {
      type: 'input',
      name: 'csvFilepath',
      message: 'Write the filepath for the CSV'
    },
    {
      type: 'input',
      name: 'yardiIntegrationid',
      message: 'Enter the yardi integration id'
    },
    {
      type: 'input',
      name: 'activationDate',
      message: 'Enter activation date'
    },
  ];

  const answers = inquirer.prompt(questions)
  answers.then(ans => console.log(ans));