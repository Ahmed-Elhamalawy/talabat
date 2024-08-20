const restaurantRepo = require("../repos/resturantRepo");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const signUp = async (
  name,
  address,
  phoneNumber,
  category,
  owner,
  password
) => {
  try {
    const restaurant = await restaurantRepo.createRestaurant(
      name,
      address,
      phoneNumber,
      category,
      owner,
      password
    );
    const token = jwt.sign({ name }, config.jwt.secret, {
      expiresIn: config.jwt.expiration,
    });
    return { restaurant, token };
  } catch (error) {
    throw error;
  }
};
module.exports = { signUp };
