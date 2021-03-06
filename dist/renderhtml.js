function renderManager(obj) {
    return `<!DOCTYPE html>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="./style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Roboto&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    </head>
    <body>
        <header class="text-center custom-bg">
            <h1>Your Team</h1>
        </header>
    <div class="team">
        <div class="col-12 col-md-3 col-lg-4 mb-5">
            <div class="card-top bg-blue text-left p-2 box-shadow card-header-radius">
                <div class="title">
                    <h2>${obj.name}</h2>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
                </svg>
                <h2 class="logo">Manager</h2>
            </div>
            <div class="card-text custom-card-bg box-shadow">
                <ol class="list-group col-10 mx-auto py-3">
                    <li class="list-group-item">Id: ${obj.id}</li>
                    <li class="list-group-item">Email: ${obj.email}</li>
                    <li class="list-group-item">Office Number: ${obj.officeNumber}</li>
                </ol>
            </div>
        </div>
        `
}

function renderIntern(obj) {
    return `<div class="col-12 col-md-3 col-lg-4 mb-5">
    <div class="card-top bg-blue text-left p-2 box-shadow card-header-radius">
        <div class="title">
            <h2>${obj.name}</h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bookmarks-fill" viewBox="0 0 16 16">
        <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z"/>
        <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1H4.268z"/>
        </svg> 
        <h2 class="logo">Intern</h2>
    </div>
    <div class="card-text custom-card-bg box-shadow">
        <ol class="list-group col-10 mx-auto py-3">
            <li class="list-group-item">Id: ${obj.id}</li>
            <li class="list-group-item">Email: ${obj.email}</</li>
            <li class="list-group-item">School: ${obj.school}</li>
        </ol>
    </div>
</div>`
}

function renderEngineer(obj){
    return `<div class="col-12 col-md-3 col-lg-4 mb-5">
    <div class="card-top bg-blue text-left p-2 box-shadow card-header-radius">
        <div class="title">
            <h2>${obj.name}</h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bricks" viewBox="0 0 16 16">
        <path d="M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 0 0 1-.5-.5v-3zM3 4v2h4.5V4H3zm5.5 0v2H13V4H8.5zM3 10v2h4.5v-2H3zm5.5 0v2H13v-2H8.5zM1 1v2h3.5V1H1zm4.5 0v2h5V1h-5zm6 0v2H15V1h-3.5zM1 7v2h3.5V7H1zm4.5 0v2h5V7h-5zm6 0v2H15V7h-3.5zM1 13v2h3.5v-2H1zm4.5 0v2h5v-2h-5zm6 0v2H15v-2h-3.5z"/>
        </svg>
        <h2 class="logo">Engineer</h2>
    </div>
    <div class="card-text custom-card-bg box-shadow">
        <ol class="list-group col-10 mx-auto py-3">
            <li class="list-group-item">Id: ${obj.id}</li>
            <li class="list-group-item">Email: ${obj.email}</li>
            <li class="list-group-item">GitHub: ${obj.github}</li>
        </ol>
    </div>
</div>`
}

function renderEnd(){
    return `</div>
    </div>
    </body>
    </html>`
}

module.exports = {
    renderManager,
    renderIntern,
    renderEngineer,
    renderEnd
};