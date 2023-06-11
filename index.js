const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Square, Circle} = require('./lib/shapes');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err ? console.log(err) : console.log('Successfully created your desired logo!');
    });
};

function generateLogo(data) {
    let template =
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
`;
    
    let Shape;
    if (data.shape === 'Circle') {
        Shape = new Circle();
        template += 
`   <circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />
            
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

</svg>`
    } else if (data.shape === 'Triangle') {
        Shape = new Triangle();
        template += 
`   <polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}" />
            
    <text x="150" y="125" font-size="40" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

</svg>`
    } else if (data.shape === 'Square') {
        template += 
`   <rect x="73" y="40" width="160" height="160" fill="${data.shapeColor}" />
            
    <text x="150" y="140" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

</svg>`
    }

    return template;
};

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like to use for a logo? (Up to 3 characters)'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text to be? (Name of color or hexadecimal of color)'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select which shape you would like for your logo:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape to be? (Name of color or hexdecimal of color)'
    }
];

function init() {
    inquirer.prompt(questions).then((answers) => {
        const logo = generateLogo(answers);

        writeToFile('logo.svg', logo);
    });
};

init();
