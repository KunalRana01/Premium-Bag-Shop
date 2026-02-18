const express = require("express");
const productSchema  = require("../models/product-model");
const { isLoggedIn } = require("../middlewares/isLoggedIn");
const userModel = require("../models/user-model");

const router = express.Router();


router.get("/" , (req,res)=>{
    let error = req.flash("error");
    
    res.render("index" , {error , loggedIn : false});
});

router.get("/shop" , isLoggedIn ,  async (req,res)=>{
    let products = await productSchema.find();
    let success = req.flash("success");
    res.render("shop" , {products , success})
});


router.get("/cart" , isLoggedIn, async (req,res)=>{
    let user = await userModel.findOne({email:req.user.email})
    .populate("cart");

    const bill = (Number(user.cart[0].price)+20)-Number(user.cart[0].discount);
    
    
    res.render("cart" , {user , bill});
});

router.get("/addtocart/:id" , isLoggedIn ,async (req,res)=>{
    let user = await userModel.findOne({email:req.user.email});
    user.cart.push(req.params.id);
    await user.save();
    req.flash("success" , "Item added to cart");
    res.redirect("/shop");
    
});


module.exports = router;