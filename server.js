const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.send("Home page");
});

app.listen(8000, () => {
  console.log("server started on port 8000");
});
