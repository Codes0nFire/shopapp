const express= require("express");
const upload= require("../config/multerConfig");

 const router= express.Router();

router.get("/",function(req,res){
    res.send("working fine lets go");
})


router.post("/create",upload.single("image"),function(req,res){
    res.send(req.file);
})


module.exports=router;