const mongoose = require("mongoose");

const detailsSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
    },
    lname: {
      type: String,
    },
    phone: {
      type: Number,
    },

    email: {
      type: String,
    },
    password: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
);

const detailsModel = mongoose.model("detail", detailsSchema);
module.exports = detailsModel;
