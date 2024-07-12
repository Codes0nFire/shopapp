const express= require("express");
const upload= require("../config/multerConfig");
const productModel=require("../models/productModel")

 const router= express.Router();

router.get("/",function(req,res){
    res.send("working fine lets go");
})


router.post("/create",upload.single("image"),async function(req,res){

    let{ name,
        price,
        discount,
        image,
        bgcolor,
        panelcolor,
        textcolor} =req.body;

    let product= await productModel.create({
        name,
        price,
        discount,
        image:req.file.buffer,
        bgcolor,
        panelcolor,
        textcolor
    
    })

    req.flash("success","product created succesfully");
    res.redirect("back");

    


    
})


module.exports=router;