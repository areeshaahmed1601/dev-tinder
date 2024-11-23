const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("Handling the route");
    next();
    res.end("Response");
  },
  (req, res) => {
    console.log("Handling the route user 2");
    res.send("2nd Response!!!");
  }
);

// app.use(
//   "/user",
//   (req, res, next) => {
//     console.log("Handling the route");
//     res.end("Response");
//     next();
//   },
//   (req, res) => {
//     console.log("Handling the route user 2");
//     res.send("2nd Response!!!");
//   }
// );

app.listen("3000", () => {
  console.log("Server is listening to port 3000");
});
