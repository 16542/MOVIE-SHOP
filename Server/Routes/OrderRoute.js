const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("./VerifyToken");

const {
  GetUserOrder,
  CreateOrder,
  DeleteOrder,
  UpdateOrder,
  GetAllOrders
} = require("../Controller/OrderController");

router.post("/create-order",verifyToken,CreateOrder);
router.get('/getuser-order/:userId',verifyTokenAndAuthorization,GetUserOrder);
router.delete('/delete-order/:id',verifyTokenAndAdmin,DeleteOrder);
router.put('/update-order/:id',verifyTokenAndAdmin,UpdateOrder);
router.get('/getallusers-order',verifyTokenAndAdmin,GetAllOrders)


module.exports = router