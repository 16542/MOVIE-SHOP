const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
    },
    isValid:{
      type:Boolean,
      default:false
    },
    ValidationCode:{
      type:String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
