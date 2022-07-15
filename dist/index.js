const inquirer = require('inquirer');
const fs = require('fs');
const Employees = require('./classes');
const render = require('./renderhtml');


// questions for inquirer
let questions = {
    manager: [
    {
        type: 'input',
        message: 'Enter project Manager name',
        name: 'managerName'
    },
    {
        type: 'number',
        message: 'Enter project Manager ID number',
        name: 'managerId'
    },
    {
        type: 'email',
        message: 'Enter project Manager email',
        name: 'managerEmail'
    },
    {
        type: 'number',
        message: 'Enter project Manager office number',
        name: 'managerOffice'
    },
    {
        type: 'confirm',
        message: 'Would you like to add another employee?',
        name: 'loop'
    },
],
    loop: [
        {
            type: 'confirm',
            message: 'Would you like to add another employee?',
            name: 'loop'
        },
    ],
    engineer: [
        {
            type: 'input',
            message: 'Enter project Engineer name',
            name: 'engineerName'
        },
        {
            type: 'number',
            message: 'Enter project Engineer id',
            name: 'engineerId'
        },
        {
            type: 'email',
            message: 'Enter project Engineer Email',
            name: 'engineerEmail'
        },
        {
            type: 'email',
            message: 'Enter project Engineer Github',
            name: 'engineerGit'
        },   
    ],
    intern: [
        {
            type: 'input',
            message: 'Enter project Intern name',
            name: 'internName'
        },
        {
            type: 'number',
            message: 'Enter project Intern ID',
            name: 'internId'
        },
        {
            type: 'email',
            message: 'Enter project Intern email',
            name: 'internEmail'
        },
        {
            type: 'input',
            message: 'Enter project Intern school',
            name: 'internSchool'
        },
    ],
    employeeType: [
        {
            type: 'list',
            message: 'What kid of employee would you like to add?',
            choices: ['intern', 'engineer'],
            name: 'employeeType', 
        },
    ]

}

// question display
function loop(response){
    // if response parameter is undefined, run the manager question set
    if(!response){
    inquirer.prompt(questions.manager).then(response => {
        // create manager obj from manager subclass
        const { managerName, managerId, managerEmail, managerOffice } = response;
        
        let manager = new Employees.Manager(managerName, managerId, managerEmail, managerOffice)
        console.log(manager)
        fs.writeFileSync('index.html', render.renderManager(manager))
        
        // if response.loop from manager q set is true, run qLoop with a response of the desired employee type
        if(response.loop) {inquirer.prompt(questions.employeeType).then(res => {qLoop(res)})}
        // else, end the function
        else return
    })} 
    // Else, (if response parameter is defined), run just the loop quesiton - no manager questions - and use the employeeType response for qLoop
    else {
    inquirer.prompt(questions.loop).then(res => {
        if(res.loop) {inquirer.prompt(questions.employeeType).then(res => {qLoop(res)})}
        // else, end function and append end of html
        else return fs.appendFileSync('index.html', render.renderEnd())
    })}}

function qLoop (response) {
        if(response.employeeType === 'intern') {
            inquirer.prompt(questions.intern).then(res => {
                // create intern obj
                const { internName, internId, internEmail, internSchool } = res;

                let intern = new Employees.Intern(internName, internId, internEmail, internSchool);

                fs.appendFileSync('index.html', render.renderIntern(intern))
                // import a render html function
                // use the newly made class as a parameter to render it- that also means im gonna need to set up a first thing function call to make the boilerplate stuff
                // i think ill do that one in the manager section bc it only runs once, then the rest of these are appended

                // call loop with defined response parameter
                loop(response)
            })
        } else {inquirer.prompt(questions.engineer).then(res => {
            // create engineer obj
            const { engineerName, engineerId, engineerEmail, engineerGit } = res;

            let engineer = new Employees.Engineer(engineerName, engineerId, engineerEmail, engineerGit);

            fs.appendFileSync('index.html', render.renderEngineer(engineer))
            // call loop with defined response parameter
            loop(response)
})}}

loop()