const Restaurant = require("../models/restaurant");

const createRestaurant = async (
  name,
  address,
  phoneNumber,
  category,
  owner,
  password
) => {
  try {
    const restaurant = new Restaurant({
      name,
      address,
      phoneNumber,
      category,
      owner,
      password,
    });
    await restaurant.save();
    return restaurant.toObject();
  } catch (error) {
    throw error;
  }
};
module.exports = { createRestaurant };
