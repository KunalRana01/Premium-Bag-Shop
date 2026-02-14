const express = require("express");
const productSchema  = require("../models/product-model");
const { isLoggedIn } = require("../middlewares/isLoggedIn");

const router = express.Router();


router.get("/" , (req,res)=>{
    let error = req.flash("error");
    
    res.render("index" , {error});
});

router.get("/shop" , isLoggedIn ,  async (req,res)=>{
    let products = await productSchema.find();
    res.render("shop" , {products})
});

module.exports = router;