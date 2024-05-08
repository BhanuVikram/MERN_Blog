const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(`Connected to database: ${con.connection.host}`);
    })
    .catch((error) => {
      console.log(`Cannot connect to database: ${error}`);
    });
};

module.exports = connectDB;
