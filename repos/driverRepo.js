const Driver = require("../models/driver");

const createDriver = async (
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
    const driver = new Driver({
      firstName,
      lastName,
      password,
      nationalId,
      email,
      age,
      vehicle,
      salary,
    });
    await driver.save();
    return driver.toObject();
  } catch (error) {
    throw console.log(error, "repo error");
  }
};
const getDriverbyEmail = async (email) => {
  try {
    const driver = await Driver.findOne({ email });
    return driver;
  } catch (error) {
    throw error;
  }
};

module.exports = { createDriver, getDriverbyEmail };
