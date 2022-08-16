const jwt = require("jsonwebtoken");
const User = require("../Models/UserModel");
const bcrypt = require("bcryptjs");
const { ConfirmationCode } = require("../nodemailer");
require("dotenv").config();

//   Try to login  a user

module.exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    console.log(user);
    if (!user) {
      res.status(400).json({ message: "User doesn't exist..." });
    }
    console.log(user)
    const isValid = await bcrypt.compare(password, user.password);
    if(isValid && user && !user.isValid){
      res.status(400).json("Please check your email and confirme your account..")
    }
    // if (isValid && user && !user.isValid) {
    //     res.status(300).json({message:"Check you email and verify you account"})

    // }

    if (isValid && user&& user.isValid ) {
      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
        { expiresIn: "1d" }
      );
      console.log(user);
      const { password, ...others } = user._doc;
      res.status(200).json({ ...others, accessToken });

      next();
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

// Try to register a user ;

module.exports.register = async (req, res, next) => {
  let CharCaracters = "0123456789qwertyuiopasdfghjklzxcvbn";
  let ValidationCode = "";
  for (let i = 0; i < 25; i++) {
    ValidationCode +=
      CharCaracters[Math.floor(Math.random() * CharCaracters.length)];
  }
  const { username, email, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);
  const user = new User({
    username,
    email,
    password: hash,
    ValidationCode: ValidationCode,
  });
  console.log(user);
  try {
    const savedUser = await user.save();
    ConfirmationCode(email,user.ValidationCode)
    res.status(200).json(savedUser);

    next();
  } catch (error) {
    res.status(400).json(error);
  }
};

//  Try to Logout a user ;

module.exports.logout = async (req, res, next) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    if (!user) return res.status(400).json("User doesn't exist...");

    res.status(200).send("logout successfully");
    next();
  } catch {
    res.status(400).json("Wrong Credential...");
  }
};
