const User = require("../Models/UserModel");
const { sendMessage } = require("../nodemailer");

//Delete
module.exports.DeleteUser = async (req, res) => {
  try {
    const DeleltedUser = await User.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json("User has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update

module.exports.UpdateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET User :

module.exports.GetUser = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get All Users

module.exports.GetAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.SendMail = async (req, res) => {
  
  const email = req.body.email;
  console.log(email)
  try {
      const sendEmail = await sendMessage(email);
      console.log(sendEmail)  
    res.status(200).json({message:"Email has been sended Successfully..."})

  } catch (error) {
    res.status(400).json({message:"Can't send  email..."})
  }
};
