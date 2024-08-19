const customerRepo = require("../repos/customerRepo");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/config");

/*------------------------------Create new customer service -----------------------------  */
const signUp = async (firstName, lastName, email, password, phoneNumber) => {
  try {
    const token = jwt.sign({ email }, config.jwt.secret, {
      expiresIn: config.jwt.expiration,
    });
    const customer = await customerRepo.createCustomer(
      firstName,
      lastName,
      email,
      password,
      phoneNumber
    );
    return {
      customer,
      token,
    };
  } catch (error) {
    console.log("service Error", error);
  }
};

module.exports = {
  signUp,
};
