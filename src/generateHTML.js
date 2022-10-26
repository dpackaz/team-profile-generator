// packages needed to generate HTML
const generateManager = require("./generateManager");
const generateEngineer = require("./generateEngineer");
const generateIntern = require("./generateIntern");

// function that creates a temporary array for the new employees that are input by the user
// the function iterates through the array checking against the employee's position to determine
// which card template it should be constructed with in the HTML
const generateMyTeam = (data) => {
    const tempArray = [];
    for (i = 0; i < data.length; i++) {
        const employee = data[i];
        const position = employee.getPosition();

        if (position === "Manager") {
            const newManagerCard = generateManager(employee);
            tempArray.push(newManagerCard);
        }

        if (position === "Engineer") {
            const newEngineerCard = generateEngineer(employee);
            tempArray.push(newEngineerCard);
        }

        if (position === "Intern") {
            const newInternCard = generateIntern(employee);
            tempArray.push(newInternCard);
        }
    }
    const newTeamString = tempArray.join("");
    return newTeamString;
};

function generateHtml(newTeamString) {
    return 
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"> integrity ="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin ="anonymous"> 
      <link rel="stylesheet" href="./dist/style.css">
      <title>New Team<title>
    <head/>

    <body>
        <div class="jumbotron jumbotron-fluid custom-jumbotron">
            <div class="container">
                <h1 class="display-4 d-flex justify-content-center">My Team</h1>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="d-flex flex-row flex-wrap justify-content-center">${generateMyTeam(newTeamString)}</div>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
        </script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"
        </script>
    </body>
    </html>
    `;
}

module.exports = generateHtml;