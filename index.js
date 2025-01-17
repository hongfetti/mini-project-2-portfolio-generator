import inquirer from 'inquirer';
import colors from 'colors';
import fs from 'fs';

const generateHTML = ({ userName, userLocal, userBio, userLinked, userGit }) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${userName}</h1>
      <p class="lead">I am from ${userLocal}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${userGit}</li>
        <li class="list-group-item">LinkedIn: ${userLinked}</li>
      </ul>
    </div>
  </header>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your full name?',
      name: 'userName',
    },
    {
      type: 'input',
      message: 'Where are you located out of?',
      name: 'userLocal',
    },
    {
      type: 'input',
      message: 'Tell us something about you',
      name: 'userBio',
    },
    {
        type: 'input',
        message: 'What is your LinkedIn username?',
        name: 'userLinked',
      },
      {
        type: 'input',
        message: 'What is your Github username?',
        name: 'userGit',
      },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.error(err) : console.log('Success!')
      )
    });
