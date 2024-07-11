const express= require("express");

 const router= express.Router();

if(process.env.NODE_ENV == "development"){
    router.get("/",function(req,res){
        res.send("working fine lets goa");
    })
}



module.exports=router;