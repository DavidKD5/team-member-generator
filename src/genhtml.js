function generateMember(response) {
  return `<div class="memberContainer">
            <h2 class="memberName">${response.name}</h2>
            <h3 class="memberRole">${response.getRole()}<</h3>
            <p class="id">ID: ${response.id}<</p>
            <p class="email">Email: ${response.email}<</p>
            <p class="other">Other: ${response.other}<</p>
        </div>`;
}

function generateTeam(response) {
  let htmlString = "";

  response.forEach((element) => {
    console.log(element);
    let string = generateMember(element);
    htmlString += string;
  });
  return htmlString;
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
    <h1 class="title">My Team</h1>
    <div class="team">
      ${generateTeam(response)}
    </div>
  </body>
</html>`;
}

module.exports = generateHtml;
