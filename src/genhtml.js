function newManager(response) {
  return `<div class="memberContainer">
            <h2 class="memberName">${response.name}</h2>
            <h3 class="memberRole">${response.getRole()}</h3>
            <p class="id"><span>ID</span>: ${response.id}</p>
            <p class="email"><span>Email</span>: ${response.email}</p>
            <p class="other"><span>Office Number</span>: ${
              response.officeNumber
            }</p>
            <a href="mailto:${
              response.email
            }" target="_blank"><img src="./Assets/images/email.png" alt=""
          /></a>

        </div>`;
}

function newEngineer(response) {
  return `<div class="memberContainer">
            <h2 class="memberName">${response.name}</h2>
            <h3 class="memberRole">${response.getRole()}</h3>
            <p class="id"><span>ID</span>: ${response.id}</p>
            <p class="email"><span>Email</span>: ${response.email}</p>
            <p class="other"><span>Github User</span>: ${response.github}</p>
            <a href="https://www.github.com/${
              response.github
            }" target="_blank"><img src="./Assets/images/github.png" alt=""
          /></a>
          <a href="mailto:${
            response.email
          }" target="_blank"><img src="./Assets/images/email.png" alt=""
          /></a>
        </div>`;
}

function newIntern(response) {
  return `<div class="memberContainer">
            <h2 class="memberName">${response.name}</h2>
            <h3 class="memberRole">${response.getRole()}</h3>
            <p class="id"><span>ID</span>: ${response.id}</p>
            <p class="email"><span>Email</span>: ${response.email}</p>
            <p class="other"><span>School</span>: ${response.school}</p>
            <a href="mailto:${
              response.email
            }" target="_blank"><img src="./Assets/images/email.png" alt=""
          /></a>
        </div>`;
}

function generateTeam(response) {
  let htmlScript = "";

  response.forEach((answer) => {
    if (answer.getRole() === "Manager") {
      let div = newManager(answer);
      htmlScript += div;
    } else if (answer.getRole() === "Engineer") {
      let div = newEngineer(answer);
      htmlScript += div;
    } else if (answer.getRole() === "Intern") {
      let div = newIntern(answer);
      htmlScript += div;
    }
  });
  return htmlScript;
}

function generateHtml(response) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="Develop/style.css" />
    <title>Team Profile Generator</title>
  </head>
  <body>
    <div class="background">
        <h1 class="title">My Team</h1>
        <div class="team">
        ${generateTeam(response)}
        </div>
    </div>
  </body>
</html>`;
}

module.exports = generateHtml;
