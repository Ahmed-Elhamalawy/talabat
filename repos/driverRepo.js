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

module.exports = { createDriver };
