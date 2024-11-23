const express = require("express");

const app = express();

app.get("/getUserData", (req, res) => {
  //logic of DB call and get user data

  throw new Error("sfnskfnkfna");
  res.send("User Data Sent");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong");
  }
});

app.listen("3000", () => {
  console.log("Server is listening to port 3000");
});
