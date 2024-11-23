const mongoose = require("mongoose");
require("./env");

const connectDB = async () => {
  await mongoose.connect(DB_CONNECTION_URL);
};

module.exports = connectDB;
