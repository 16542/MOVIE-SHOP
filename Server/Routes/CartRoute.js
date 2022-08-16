const router = require("express").Router();

const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("./VerifyToken");

const {
  CreateCart,
  UpdateCart,
  DeleteCart,
  GetAllCarts,
  GetCart,
} = require("../Controller/CartController");

router.post("/create-cart", verifyTokenAndAdmin, CreateCart);
router.put("/update-cart/:id", verifyTokenAndAuthorization, UpdateCart);
router.delete("/delete-cart/:id", verifyTokenAndAuthorization, DeleteCart);
router.get("/getall-carts", verifyTokenAndAdmin, GetAllCarts);
router.get("/get-cart/:id", verifyTokenAndAuthorization, GetCart);

module.exports = router;
