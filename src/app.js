const express = require("express");
const { adminAuth } = require("./middlewares/auth");

const app = express();

//Handle auth middleware for all req
app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res) => {
  //Logic of checking if the request is authorized
  res.send("All Data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Delete a user");
});

app.listen("3000", () => {
  console.log("Server is listening to port 3000");
});
