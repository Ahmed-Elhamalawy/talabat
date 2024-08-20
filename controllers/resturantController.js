const restaurantService = require("../services/resturantService");

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
    res.send(resturant);
    res.cookie("token", resturant.token, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { signUp };
