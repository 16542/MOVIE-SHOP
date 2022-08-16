const Cart = require('../Models/CartModel');



// Create 
module.exports.CreateCart = async(req,res)=>{
  const cart = new Cart(req.body);
    try {
      const savedCart  = await cart.save()
      res.status(200).json(savedCart)
    } catch (error) {
        req.status(500).json(error)
    }
}

// Update
module.exports.UpdateCart=async(req,res)=>{
  try {
    const UpdatedCart = await Cart.findByIdAndUpdate({_id:req.paramas},{
      $set:req.body
    },{new:true})
    
    res.status(200).json(UpdatedCart)
    
  } catch (error) {
    res.status(500).json(error)
  }
}


// Delete
module.exports.DeleteCart = async(req,res)=>{
  try {
    const DeletedCart = await Cart.findByIdAndDelete(req.parmas.id)
    res.status(200).json('Cart deleted Successfully...')
  } catch (error) {
    res.status(500).json(error)
  }
}


// Get all carts
module.exports.GetAllCarts = async(req,res)=>{
  try {
      const allCarts= await Cart.find({});
      res.status(200).json(allCarts)
  } catch (error) {
    res.status(400).json(error)
  }
}

// Get CART
module.exports.GetCart = async(req,res)=>{
  try {
    const GetCart = await  Cart.find({userId:req.params.id}) 
    res.status(200).json(GetCart)   
  } catch (error) {
    res.status(400).json(error)
  }
}

