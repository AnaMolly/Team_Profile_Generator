function generateHTML(teamArr){
    let length = teamArr.length


    
    let addMembers = (teamArr) => {
        let cards=""
        console.log(teamArr)
        for (i=0;i<length;i++){
            cards += `
           
                <div class="card" style="width: 18rem; box-shadow: 5px 8px 8px #a7a7a7; border:none">
                    <div class="card-header" id="" style="color:white; font-weight:300; font-size: 35px; color:white; background-color: rgb(114, 114, 13)"> <span>${teamArr[i].name}</span>
                        <p style="color:white; font-weight:100; font-size: 25px; color:white; margin:0px">${teamArr[i].getRole()} </p>
                        </div>
                        <ul class="list-group list-group-flush" style="padding:10px; background-color:rgb(187, 187, 34)">
                            <li class="list-group-item" style="background-color: rgb(255, 240, 211); margin:8px; font-size: 17px; color: rgb(100, 99, 97)">Email: <span>${teamArr[i].email}</span></li>
                            <li class="list-group-item" style="background-color: rgb(255, 240, 211);  margin:8px; font-size: 17px; color: rgb(100, 99, 97)">ID: <span>${teamArr[i].id}</span></li>
                        </ul>
                </div>
            `
        }
    return cards;
    }
        
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    </head>
    <div class="jumbotron jumbotron-fluid" style="background-color: rgb(187, 187, 34); padding:40px 0px 0px 0px">
        <div class="container" style="text-align: center;">
        <h1 class="display-4" style="font-size:100px; color: lightyellow; font-weight: 200; letter-spacing: 2px">Team Profile</h1>
        <p class="lead" style="font-style: italic; color: lightyellow; font-weight: 100; font-size: 28px; margin:0px; padding-top:10px; letter-spacing: 1.5px;">Find your colleagues here.</p>
            <img src="./team.png" alt="team" style="max-height: 120px; padding:20px 0px 30px 0px">
        </div>
    </div>
    <body style="background-color: rgb(247, 247, 225);">
    <div class="row" style="justify-content: space-evenly; ">
    ${addMembers(teamArr)}
    </div>
    </body>
    </html>
`
}


module.exports =  generateHTML