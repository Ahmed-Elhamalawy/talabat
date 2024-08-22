const driverService = require("../services/driverService");
const jsend = require("jsend");
const { validationResult } = require("express-validator");

const signUp = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      password,
      nationalId,
      email,
      age,
      vehicle,
      salary,
    } = req.body;
    const driver = await driverService.signUp(
      firstName,
      lastName,
      password,
      nationalId,
      email,
      age,
      vehicle,
      salary
    );
    res.cookie("token", driver.token, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    });
    // console.log(driver);
    res.send(jsend.success(driver));
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
    const { driver, token } = await driverService.login(email, password);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    });
    res.send(jsend.success(driver));
  } catch (error) {
    next(error);
  }
};
module.exports = { signUp, login };
