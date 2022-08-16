const router = require("express").Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../Routes/VerifyToken");
const {
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
  GetProducts,
  GetProduct,
} = require("../Controller/ProductController");
router.get("/", GetProducts);
router.post("/create-product", verifyTokenAndAdmin, CreateProduct);
router.put("/update-product/:id", verifyTokenAndAdmin, UpdateProduct);
router.delete("/delete-product/:id", verifyTokenAndAdmin, DeleteProduct);
router.get("/get-product/:id", GetProduct);
module.exports = router;
