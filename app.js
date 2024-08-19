// packages and File  Imports
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config/config");
const connectDB = require("./config/db");

// Run Database and Express
// TODO: Add Database ASYNC
connectDB();
const app = express();
const port = config.port || 3000;

//Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//  Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
