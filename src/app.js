const express = require("express");

const app = express();

// app.use("/user", (req, res) => {
//   res.send("hahahahha");
// });

app.get("/user", (req, res) => {
  res.send({ firstName: "Areesha", lastName: "Ahmed" });
});

app.post("/user", (req, res) => {
  console.log("Save Data to the database");
  res.send("Data successfully saved to the database");
});
//this will match all the http method api calls to /test
app.use("/test", (req, res) => {
  res.send("Hello from the server..");
});

app.listen("3000", () => {
  console.log("Server is listening to port 3000");
});
