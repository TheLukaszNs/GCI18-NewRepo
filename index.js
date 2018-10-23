const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Łukasz loves contributing to ScoreLab!");
});

app.listen(8080, () => {
  console.log("localServer is listening at port 8080!");
});
