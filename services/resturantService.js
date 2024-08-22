const restaurantRepo = require("../repos/resturantRepo");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const bcrypt = require("bcrypt");
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
const login = async (name, password) => {
  try {
    const restaurant = await restaurantRepo.getRestaurantbyName(name);
    if (!restaurant) {
      throw "user not found";
    }
    const isMatch = await bcrypt.compare(password, restaurant.password);
    if (!isMatch) {
      throw "password not match";
    }
    const token = jwt.sign({ name }, config.jwt.secret, {
      expiresIn: config.jwt.expiration,
    });

    return { restaurant, token };
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

module.exports = { signUp, login };
