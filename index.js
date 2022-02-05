const inquirer = require('inquirer');
const questions = [
    {
        type: 'list',
        name:'choice',
        message:"What option do you want?",
        choices: ['I have a csv file', 'I will link property manually'],
    },
    {
      type: 'input',
      name: 'csvFilepath',
      message: 'Write the filepath for the CSV',
      when(answers) {
          return answers.choice === 'I have a csv file';
      }
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