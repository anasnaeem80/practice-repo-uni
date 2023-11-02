const mongoose = require("mongoose");
//const config = require("config");

//const db = config.get("mongoURL");

const connectDB = () => {
  mongoose
    .connect(process.env.mongoURL)
    .then(() => {
      console.log("mongodb connected!");
    })
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });
};

module.exports = connectDB;
