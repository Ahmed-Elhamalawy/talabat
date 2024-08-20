const customerService = require("../services/customerService");
const jsend = require("jsend");

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

module.exports = { signUp };
