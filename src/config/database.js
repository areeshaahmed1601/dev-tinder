const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://areeshadev:phBmwkYwtWnx9Txi@namastenode.hzdvx.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
