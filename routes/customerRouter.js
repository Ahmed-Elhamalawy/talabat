const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");
const signUpValidator = require("../validators/customerValidator");

router.post(
  "/signup",
  signUpValidator.createCustomerValidator(),
  customerController.signUp
);
router.post("/login", customerController.login);

module.exports = router;
