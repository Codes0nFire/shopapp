 const express= require("express");

 const router= express.Router();

router.get("/",function(req,res){
    res.send("working fine lets go");
})


module.exports=router;
 