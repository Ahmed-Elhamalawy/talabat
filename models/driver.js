const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    vehicle: {
      type: String,
      enum: ["car", "motorcycle", "bicycle", "on_foot"],
      required: true,
    },
    nationalId: {
      type: String,
      required: true,
      unique: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
  },
  { timestamps: true }
);

const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;
