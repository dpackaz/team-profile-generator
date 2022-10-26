// function to generate card for team manager on myTeam.html
function generateManager(Manager) {
    return 
    `
    <div class="card" style="width: 18rem;">
        <div class="card-header text-white bg-primary">
            <h1 class="card-title">${Manager.name}</h1>
            <span class="material-icons">coffee</span>
            <p class="card-text">Manager</p>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item border">ID: ${Manager.id}</li>
                <li class="list-group-item border">Email: ${Manager.email}</li>
                <li class="list-group-item border">Office # ${Manager.office}</li>
            </ul>
        </div>
    </div>
    `;
}

module.exports = generateManager;