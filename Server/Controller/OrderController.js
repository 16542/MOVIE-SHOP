const Order = require("../Models/OrderModel");
// Create
module.exports.CreateOrder = async (req, res) => {
  const newOrder = new Order(req.body);
  console.log(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update
module.exports.UpdateOrder = async (req, res) => {
  try {
    const UpdatedOrder = await Order.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(UpdatedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Delete
module.exports.DeleteOrder = async (req, res) => {
  try {
    const DeleltedOrder = await Order.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json("Order has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET User Order :

module.exports.GetUserOrder = async (req, res) => {
  try {
    const userOrder = await Order.find({ userId: req.params.userId });
    res.status(200).json(userOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get All orders

module.exports.GetAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
};
