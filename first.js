const linkProperty = require('./index')
const inquirer = require('inquirer');
inquirer.registerPrompt('datetime', require('inquirer-datepicker-prompt'))
inquirer.registerPrompt('file-tree-selection', require('inquirer-file-tree-selection-prompt'))

const questions = [
    {
        type: 'list',
        name:'choice',
        message:"What do you want to do?",
        choices: ['Create an integration', 'Link a property'],
    },
  ];

  const answers = inquirer.prompt(questions)
  answers.then(ans => {
      switch (ans.choice) {
          case 'Create an integration':
              console.log('Code to create intengration');
              break;
            case 'Link a property':
                linkProperty()
                break;
          default:
              break;
      }
  });