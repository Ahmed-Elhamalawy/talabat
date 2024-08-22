const resturantController = require("../controllers/resturantController");
const express = require("express");
const router = express.Router();

router.post("/signup", resturantController.signUp);
router.post("/login", resturantController.login);
module.exports = router;
