const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const customerSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
    defaultAddressIndex: { type: Number, default: 0 },
    wallet: { type: Number, default: 0 },
    cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
    sex: { type: String, enum: ["male", "female"] },
    profilePictureURL: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
// create schema method applied before save

customerSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
