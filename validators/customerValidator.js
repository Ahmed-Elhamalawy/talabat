const { body } = require("express-validator");
const createCustomerValidator = () => [
  body("firstName").isLength({ min: 3 }),
  body("lastName").isLength({ min: 3 }),
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  body("phoneNumber").isNumeric(),
];

module.exports = { createCustomerValidator };
