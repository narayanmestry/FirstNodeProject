// import express
const { response } = require("express");
const express = require("express");

const config = require("./config/db_config");

const empRoutes = require('./routes/empRoutes');
console.log("App start........");
require("./db/config"); //get connected to  the database


const app = express(); //import app from express
app.use(express.json()); // convert request data into json
app.use(empRoutes);

app.listen(config.app.port);
console.log("Ready to work ");
