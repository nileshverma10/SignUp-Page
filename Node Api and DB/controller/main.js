const detailsModel = require("../model/main");

const addData = async (req, res) => {
  try {
    const { email, password, fname, lname, phone,gender } =
      req.body;

    const data = new detailsModel({
      email: email,
      password: password,
      fname: fname,
      lname: lname,
      phone: phone,
      gender: gender,
    });

    await data.save();
    if (!data) {
      res.status(404).json({
        message: "Data not added",
      });
    } else {
      res.status(200).json({
        message: "Data added",
        data: data,
      });
    }
  } catch (error) {
    console.log("error===>", error);
    res.send("something went wrong");
  }
};

const getData = async (req, res) => {
  try {
    const data = await detailsModel.find();
    res.status(200).json({
      message: "Data fetched",
      data: data,
    });
  } catch (error) {
    console.log("error===>", error);
    res.send("something went wrong");
  }
};

module.exports = {
  addData,
  getData,
};
