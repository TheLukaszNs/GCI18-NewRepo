const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>GCI Task</title>
      </head>
      <body>
        <p>Łukasz loves contributing to ScoreLab</p>
        <!-- This should be located at it's own file, I know! -->
      </body>
    </html>
  `);
});

app.listen(8080, () => {
  console.log("localServer is listening at port 8080!");
});
