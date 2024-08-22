const resturantController = require("../controllers/resturantController");
const express = require("express");
const router = express.Router();
const signUpValidator = require("../validators/restaurantValidator");

router.post(
  "/signup",
  signUpValidator.createRestaurantValidator(),
  resturantController.signUp
);
router.post("/login", resturantController.login);
module.exports = router;
