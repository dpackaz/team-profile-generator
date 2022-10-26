// function to generate card for new manager on myTeam.html
function generateEngineer(Engineer) {
    return 
    `
    <div class="card" style="width: 18rem;">
        <div class="card-header text-white bg-primary">
            <h1 class="card-title">${Engineer.name}</h1>
            <span class="material-icons d-flex justify-content-center"
              >engineering</span>
            <p class="card-text">Engineer</p>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item border">ID: ${Engineer.id}</li>
                <li class="list-group-item border">Email: ${Engineer.email}</li>
                <li class="list-group-item border">GitHub username: ${Engineer.github}</li>
            </ul>
        </div>
    </div>
    `;
}

module.exports = generateEngineer;