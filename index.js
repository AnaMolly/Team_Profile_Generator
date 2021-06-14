const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const generateHTML = require("./src/generatingHTML")


const managerQuestions = [ { 
    type: 'input',
    message: "What is the Manager's name?",
    name: 'name',     
    },
    { 
    type: 'input',
    message: "What is the  Manager's ID?",
    name: 'id',     
    },
    { 
    type: 'input',
    message: "What is the Manager's email address?",
    name: 'email',     
    },
    {
    type: 'input',
    message: "What is the Manager's office number?",
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
        let manager  = new Manager(name, id, email, officenum)
        teamArr.push(manager)
    
        addMoreMembers()
    })
        
}         

function addMoreMembers(){
    inquirer.prompt(moreMembers)
    .then((answers) => {
        console.log(answers.nextrole)
        if (answers.nextrole === "Engineer"){
            inquirer.prompt(engineerQuestions)
            .then((answers)=>{
                addEngineer(answers)
            })
        } else if (answers.nextrole === "Intern"){
            inquirer.prompt(internQuestions)
            .then((answers)=>{
                addIntern(answers)
            })
        } else if(answers.nextrole === "Manager"){
            inquirer.prompt(managerQuestions)
            .then((answers)=> {
                addManager(answers)  
            }) 
        } 
        if(answers.nextrole === "I am finished building my team." && teamArr.length <= 1){
            console.log("Sorry, you must include another member.");
            addMoreMembers()           
        } else if (answers.nextrole === "I am finished building my team." && teamArr.length >=2){
            console.log(teamArr)
            fs.writeFile('index.html',generateHTML(teamArr), (err) => err ? console.error(err) : console.log('Generating your team profile...'))
        }    
    })
}

function addEngineer(answers){
    let {name, id, email, github} = answers
    let engineer = new Engineer(name, id, email, github)
    teamArr.push(engineer)
    addMoreMembers()
}

function addIntern(answers){
    let {name, id, email, school} = answers
    let intern = new Intern(name, id, email, school)
    teamArr.push(intern)
    addMoreMembers()
}

function addManager(answers){
    let {name, id, email, officenum} = answers
    manager = new Manager(name, id, email, officenum)
    teamArr.push(manager)
    addMoreMembers()
}

function init() {
    initialQuestion()

}

init();