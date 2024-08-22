const driverRepo = require("../repos/driverRepo");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const bcrypt = require("bcrypt");

const signUp = async (
  firstName,
  lastName,
  password,
  nationalId,
  email,
  age,
  vehicle,
  salary
) => {
  try {
    const token = jwt.sign({ email }, config.jwt.secret, {
      expiresIn: config.jwt.expiration,
    });
    const driver = await driverRepo.createDriver(
      firstName,
      lastName,
      password,
      nationalId,
      email,
      age,
      vehicle,
      salary
    );
    return {
      driver,
      token,
    };
  } catch (error) {
    throw error;
  }
};
const login = async (email, password) => {
  try {
    const driver = await driverRepo.getDriverbyEmail(email);
    if (!driver) {
      throw "user not found";
    }
    const isMatch = await bcrypt.compare(password, driver.password);
    if (!isMatch) {
      throw "password not match";
    }
    const token = jwt.sign({ email }, config.jwt.secret, {
      expiresIn: config.jwt.expiration,
    });
    return {
      driver,
      token,
    };
  } catch (error) {
    throw error;
  }
};
module.exports = {
  signUp,
  login,
};
