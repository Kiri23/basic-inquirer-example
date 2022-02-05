const inquirer = require('inquirer');
inquirer.registerPrompt('datetime', require('inquirer-datepicker-prompt'))
inquirer.registerPrompt('file-tree-selection', require('inquirer-file-tree-selection-prompt'))

const questions = [
    {
        type: 'list',
        name:'choice',
        message:"What option do you want?",
        choices: ['I have a csv file', 'I will link property manually'],
    },
    {
      type: 'file-tree-selection',
      name: 'csvFilepath',
      message: 'Chose the filepath for the CSV',
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
      type: 'datetime',
      name: 'activationDate',
      message: 'Enter activation date'
    },
  ];

  const answers = inquirer.prompt(questions)
  answers.then(ans => console.log(ans));