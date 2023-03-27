const express = require("express");
const app = express();
const pantheonData = require("./index.json");

const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("Pantheon Data");
});
app.get("/data", (req, res) => {
  res.send(pantheonData);
});

app.listen(port, () => {
  console.log(`App is listeting to  port ${port}`);
});
