const mongoose = require("mongoose"); // step 1.
const config = require("../config/db_config");

const connectionURL = config.app.DB;

// const {
//   db: { host, port, dbname },
// } = config;
// let connectionUrl = "mongodb://" + host + ":" + port + "/" + dbname;
console.log("Server connecting...", connectionURL);
// connection with database
// mongoose.connect("mongodb://0.0.0.0:27017/studynode");    // step 1.
mongoose
  .connect(connectionURL)
  .then(() => {
    console.log("Server connected...");
  })
  .catch((error) => {
    console.log("Database Connection Error");
  });
