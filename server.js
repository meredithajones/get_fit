//Requiring dependencies: express, mongoose, and morgan 
const express = require("express");
const mongoose = require("mongoose");
const morgan  = require('morgan')

//set up the port
const PORT = process.env.PORT || 3000;

//Running express app 
const app = express();

//Setting up the connection to mongoosedb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbGetFit", { useNewUrlParser: true });

//Setting up middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"))
app.use(express.json());

//Setting up the api and html routes
app.use(require("./routes/html_routes.js"));
app.use(require("./routes/api_routes.js"));

//console log if running
app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}!`);
});