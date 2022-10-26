// function to generate card for new manager on myTeam.html
function generateIntern(Intern) {
    return 
    `
    <div class="card" style="width: 18rem;">
        <div class="card-header text-white bg-primary">
            <h1 class="card-title">${Intern.name}</h1>
            <span class="material-icons d-flex justify-content-center"">school</span>
            <p class="card-text">Intern</p>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item border">ID: ${Intern.id}</li>
                <li class="list-group-item border">Email: ${Intern.email}</li>
                <li class="list-group-item border">School: ${Intern.school}</li>
            </ul>
        </div>
    </div>
    `;
}

module.exports = generateIntern;