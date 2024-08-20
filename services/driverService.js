const driverRepo = require("../repos/driverRepo");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

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
module.exports = {
  signUp,
};
