const mongoose = require("mongoose");

//define thr mongoose connection url
const mongoURL = "mongodb://localhost:27017/hotels";

// set up mongoDB connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedUrlParser: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected to mongo db server ");
});
db.on("error", () => {
  console.log("error in mongo db server ");
});
db.on("disconnected", () => {
  console.log("mongodb disconnected");
});

// export the database connection
module.exports = db;
