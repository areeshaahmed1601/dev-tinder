const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.post("/signup", async (req, res) => {
  //creatinga new instance of user model
  const user = new User({
    firstName: "Areesha",
    lastName: "Ahmed",
    emailId: "areesha@gmail.com",
    password: "areesha@123",
  });

  await user.save();
  res.send("User added successfully");
});

connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen("3000", () => {
      console.log("Server is listening to port 3000");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected");
  });
