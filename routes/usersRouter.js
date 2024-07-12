const express= require("express");
const {registerUser,loginUser,logoutUser}=require("../controllers/authController");



 const router= express.Router();

// if(process.env.NODE_ENV == "development"){
//     router.get("/",function(req,res){
//        res.render("shop");
//     })
// }



router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/logout",logoutUser);



module.exports=router;