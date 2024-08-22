const driverController = require("../controllers/driverController");
const express = require("express");
const router = express.Router();
const signUpValidator = require("../validators/driverValidator");

router.post(
  "/signup",
  signUpValidator.createDriverValidator(),
  driverController.signUp
);
router.post("/login", driverController.login);
module.exports = router;
