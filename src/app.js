const express = require("express");

const app = express();

app.get("/ab?c", (req, res) => {
  res.send("hello");
});

app.listen("3000", () => {
  console.log("Server is listening to port 3000");
});
