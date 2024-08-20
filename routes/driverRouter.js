const driverController = require("../controllers/driverController");
const express = require("express");
const router = express.Router();

router.post("/signup", driverController.signUp);
module.exports = router;
