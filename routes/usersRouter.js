const express= require("express");
const {registerUser,loginUser,logoutUser}=require("../controllers/authController");



 const router= express.Router();

// if(process.env.NODE_ENV == "development"){
//     router.get("/",function(req,res){
//        res.render("shop");
//     })
// }



router.post("/create",registerUser);
router.post("/login",loginUser);
router.get("/logout",loginUser);



module.exports=router;