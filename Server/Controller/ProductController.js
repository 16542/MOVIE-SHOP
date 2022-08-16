const Product = require("../Models/ProductModel");
// Create

module.exports.CreateProduct = async (req, res) => {
  const { title, descritpion, image, categories, price, inStock } = req.body;
  try {
    const newProduct = new Product({
      title,
      descritpion,
      image,
      categories,
      price,
      inStock,
    });

    const savedPoduct = await newProduct.save();
    res.status(200).json(savedPoduct);
  } catch (error) {
    console.log(error);
  }
};

// Update

module.exports.UpdateProduct = async (req, res) => {
  try {
    const Updatedproduct = await Product.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(Updatedproduct);
  } catch (error) {
    console.log(error);
  }
};

//Delete;
module.exports.DeleteProduct = async (req, res) => {
  try {
    const DeltedProduct = await Product.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).json("Product Delted successfully...");
  } catch (err) {
    console.log(err);
  }
};

// Get all Products
module.exports.GetProducts = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.Category;
  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({ categories: { $in: [qCategory] } });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};


// Get Specific Product  
module.exports.GetProduct = async (req, res) => {
  try {
    const product = await Product.findById({_id:req.params.id});
    if(!product) return res.status(400).json('No Product found ... ')
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
  }
};