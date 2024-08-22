const restaurantService = require("../services/resturantService");
const jsend = require("jsend");
const { validationResult } = require("express-validator");

const signUp = async (req, res, next) => {
  try {
    const { name, address, phoneNumber, category, owner, password } = req.body;
    const resturant = await restaurantService.signUp(
      name,
      address,
      phoneNumber,
      category,
      owner,
      password
    );
    res.send(jsend.success(resturant));
    res.cookie("token", resturant.token, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    });
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
    const { name, password } = req.body;
    const { restaurant, token } = await restaurantService.login(name, password);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    });

    res.send(jsend.success(restaurant));
  } catch (error) {
    next(error);
  }
};
module.exports = { signUp, login };
