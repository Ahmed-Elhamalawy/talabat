const driverController = require("../controllers/driverController");
const express = require("express");
const router = express.Router();

router.post("/signup", driverController.signUp);
router.post("/login", driverController.login);
module.exports = router;
