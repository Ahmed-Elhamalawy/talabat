// packages and File  Imports
const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const connectDB = require("./config/db");
const customerRouter = require("./routes/customerRouter");
const driverRouter = require("./routes/driverRouter");
const resturantRouter = require("./routes/resturantRouter");

// Run Database and Express
// TODO: Add Database ASYNC
connectDB();
const app = express();
const port = config.port || 3000;
//Middlewares
app.use(express.json());
app.use("/customer", customerRouter);
app.use("/driver", driverRouter);
app.use("/resturant", resturantRouter);
app.use(cors());
//Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post;

//  Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
