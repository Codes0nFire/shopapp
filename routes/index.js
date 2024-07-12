 const express=require("express");
 const isLoggedin=require("../middlewares/isLoggedin")
 const productModel=require("../models/productModel");
const userModel = require("../models/userModel");


 const router= express.Router();

 router.get("/",function(req,res){
    let error=req.flash("error");
    res.render("index",{error,loggedin:false});
 })


 router.get("/shop",isLoggedin,async function(req,res){

    let products= await productModel.find();

    let success=req.flash("success")

    res.render("shop",{products,success});
 })




 router.get("/cart",isLoggedin,async function(req,res){

    const user= await userModel.findOne({email:req.user.email}).populate("cart");

    res.render("cart",{user});
 })


 router.get("/addtocart/:productid",isLoggedin,async function(req,res){

    const user= await userModel.findOne({email:req.user.email});

    user.cart.push(req.params.productid);
    await user.save();

    req.flash("success","added to cart go checkout");
    res.redirect("back");
    


    
 })



 module.exports=router;