const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require("./VerifyToken");
const {
  GetAllUsers,
  GetUser,
  DeleteUser,
  UpdateUser,
  SendMail
} = require("../Controller/UserController");
const router = require("express").Router();

router.get("/", verifyTokenAndAdmin, GetAllUsers);
router.get("/getuser/:id", verifyTokenAndAdmin, GetUser);
router.delete("/delete/:id", verifyTokenAndAdmin, DeleteUser);
router.put("/update/:id", verifyTokenAndAdmin, UpdateUser);
router.post("/sendEmail",verifyTokenAndAuthorization,SendMail)


module.exports=router