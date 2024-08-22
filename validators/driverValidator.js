const { body } = require("express-validator");

const createDriverValidator = () => [
  body("firstName").isLength({ min: 3 }),
  body("lastName").isLength({ min: 3 }),
  body("nationalId").isNumeric(),
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  body("age").isNumeric(),
  body("vehicle").isLength({ min: 3 }),
  body("salary").isNumeric(),
];

module.exports = {
  createDriverValidator,
};
