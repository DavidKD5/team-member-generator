const generateHtml = (answers) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
      <script src="https://kit.fontawesome.com/ba0d43019a.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="./dist/style.css"/>
      </head>
  <body>
  <div class="jumbotron jumbotron-fluid" style='background-color: #be4242;'>
  <div class="container"> 
  <h1 class="display-4 text-center font: text-white p-3"><b> My Team </b></h1>
  </div>
</div>
      ${generateTeam(answers)}
  
  </body>
  </html>`;
};

module.exports = generateHtml;
