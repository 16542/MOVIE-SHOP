const {
  register,
  login,logout
} = require('../Controller/authController')

const router = require("express").Router();

router.post("/login",login);
router.post("/register",register);
router.post("/logout/:id",logout)
module.exports =router
