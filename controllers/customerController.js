const customerService = require("../services/customerService");
const jsend = require("jsend");
const { validationResult } = require("express-validator");

const signUp = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    const customer = await customerService.signUp(
      firstName,
      lastName,
      email,
      password,
      phoneNumber
    );
    res.cookie("token", customer.token, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    });
    console.log(customer);

    res.send(jsend.success(customer));
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(jsend.error(errors.array()));
    }
    const { email, password } = req.body;
    const { customer, token } = await customerService.login(email, password);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    });
    res.send(jsend.success(customer));
    console.log(customer);
  } catch (error) {
    next(error);
  }
};

module.exports = { signUp, login };
