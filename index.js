const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")




const managerQuestions = [ { 
    type: 'input',
    message: "What is the team Manager's name?",
    name: 'name',     
    },
    { 
    type: 'input',
    message: "What is the team Manager's ID?",
    name: 'id',     
    },
    { 
    type: 'input',
    message: "What is the team Manager's email address?",
    name: 'email',     
    },
    {
    type: 'input',
    message: "What is the team Manager's office number?",
    name: 'officenum', 
    } 
]

const engineerQuestions = [ { 
    type: 'input',
    message: "What is the Engineer's name?",
    name: 'name',     
    },
    { 
    type: 'input',
    message: "What is the Engineer's ID?",
    name: 'id',     
    },
    { 
    type: 'input',
    message: "What is the Engineer's email address?",
    name: 'email',     
    },
    {
    type: 'input',
    message: "What is the Engineer's GitHub URL?",
    name: 'github',  
    }
]

const internQuestions = [
    { 
    type: 'input',
    message: "What is the Intern's name?",
    name: 'name',     
    },
    { 
    type: 'input',
    message: "What is the Intern's ID?",
    name: 'id',     
    },
    { 
    type: 'input',
    message: "What is the Intern's email address?",
    name: 'email',     
    },
    {
    type: 'input',
    message: "Where does the Intern go to school?",
    name: 'school',  
    }
]

const moreMembers = [
    {
        type: 'list',
        message: 'Finish building your team. What role would you like to add next?',
        name: 'nextrole',
        choices: ['Engineer', 'Intern', 'Manager',"I am finished building my team."],      
    }
]

function initialQuestion(){
    teamArr = []
    
    
    inquirer.prompt(managerQuestions)
        .then((answers)=> {
        let {name, id, email, officenum} = answers
        let manager = new Manager(name, id, email, officenum)
        teamArr.push(manager)
        console.log(teamArr)
        
        let addMoreMembers = () => {
            inquirer.prompt(moreMembers)
            .then((answers) => {
                console.log(answers.nextrole)
                if (answers.nextrole === "Engineer"){
                    inquirer.prompt(engineerQuestions)
                }
            })
        }
        addMoreMembers()

        
    
    })
        
}     



function init() {
    initialQuestion()

}

init()