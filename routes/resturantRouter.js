const resturantController = require("../controllers/resturantController");
const express = require("express");
const router = express.Router();

router.post("/signup", resturantController.signUp);
module.exports = router;
