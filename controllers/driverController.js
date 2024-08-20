const driverService = require("../services/driverService");

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
    res.send(driver);
  } catch (error) {
    next(error);
  }
};
module.exports = { signUp };
