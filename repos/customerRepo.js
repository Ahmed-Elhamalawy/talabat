const Customer = require("../models/customer");

/*------------------------------Create new user -----------------------------  */
const createCustomer = async (
  firstName,
  lastName,
  email,
  password,
  phoneNumber
) => {
  try {
    const customer = new Customer({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    });
    await customer.save();
    return customer.toObject();
  } catch (error) {
    throw error;
  }
};

const getCustomerByEmail = async (email) => {
  try {
    const customer = await Customer.findOne({ email });
    return customer;
  } catch (error) {
    throw error;
  }
};

module.exports = { createCustomer, getCustomerByEmail };
