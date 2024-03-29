const mongoose = require("mongoose");
const connectDB = () => {
  mongoose.connect(process.env.DB_URL).then((data) => {
    console.log("mongoDB connected with server", data.connection.host);
  });
};

module.exports = connectDB;
