const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(8080, () => {
  console.log("The server is up and running on 8080");
});
