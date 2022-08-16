const router = require("express").Router();
const stripe = require('stripe')("sk_test_51K5VjILMS55jtNeix4hG68sJet8wYd3HIY7CznX60tsB2JmKFxqxOAJUiBfPrBWEY065ctnZgXWnZUtDIPuKSCtI00EQdMXtld")

router.post('/payment', async(req,res)=>{
  stripe.charges.create(
    {
      source:req.body.tokenId,
      amount:req.body.amount,
      currency:"usd"
    },
    (stripeErr,stripeRes)=>{
      if(stripeErr){
        console.log(stripeErr)
        res.status(500).json(stripeErr)
      }else{
        res.status(200).json(stripeRes)
      }
    }
  )
})

module.exports= router