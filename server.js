const express = require("express");
const cors = require("cors");
const authRoutes = require("./Server/Routes/auth");
const ProductRoutes = require("./Server/Routes/ProductRoute");
const OrdersRoutes = require("./Server/Routes/OrderRoute");
const UserRoutes = require("./Server/Routes/UserRoute");
const CartRoutes = require("./Server/Routes/CartRoute");
const PaymentRoute = require('./Server/Routes/stripe')
const verifyRoute  = require('./Server/Routes/verifyAccount')
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 8000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB connected successfully...");
  })
  .catch((err) => console.log(err));

app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/products", ProductRoutes);
app.use("/api/order", OrdersRoutes);
app.use("/api/user", UserRoutes);
app.use("/api/cart", CartRoutes);
app.use("/api/checkout",PaymentRoute)
app.use("/api/verify",verifyRoute)
app.listen(port, () => {
  console.log(`Your application run on port ${port}`);
});
