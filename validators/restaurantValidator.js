const { body } = require("express-validator");

const createRestaurantValidator = () => [
  body("name").isLength({ min: 3 }),
  body("address").isLength({ min: 3 }),
  body("phoneNumber").isNumeric(),
  body("category").isLength({ min: 3 }),
  body("owner").isLength({ min: 3 }),
  body("password").isLength({ min: 5 }),
];

module.exports = { createRestaurantValidator };
