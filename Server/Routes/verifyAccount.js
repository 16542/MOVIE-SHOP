const react = require("react");
const User = require("../Models/UserModel");

const router = require("express").Router();

router.post("/verifyaccount/:validationCode",async(req,res)=>{
  const user = await User.findOne({ValidationCode:req.params.validationCode});
  if(!user) return res.status(400).json("Validation Code does't exist...")
  user.isValid = true
  await user.save()
  res.status(200).json('Your Account has been activated...')


})

module.exports = router