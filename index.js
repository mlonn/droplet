const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "lonn.xyz")));
app.use(express.static(path.join(__dirname, "old-projects/Ant")));


app.get("/ant", function(req, res) {
  res.sendFile(path.join(__dirname, "old-projects/Ant", "ant.html"));
});
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "lonn.xyz/build", "index.html"));
});
app.listen(9000);
