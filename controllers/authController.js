
const userModel=require("../models/userModel");
const bcrypt= require("bcrypt");
const jwt = require("jsonwebtoken");
const {generateToken}= require("../utils/genrateToken")


module.exports.registerUser= async  function(req,res){

    let {fullname, email, password}=req.body;

    let user= await userModel.findOne({email});

    if(user){
        req.flash("error","user already exists")

        return res.redirect("/");
    }


   try{

    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash(password,salt, async function (err,hash){

       if(err)return res.send(err.message)

            const newuser= await userModel.create({
                fullname,
                email,
                password:hash
            });


          const token= generateToken(newuser)

           res.cookie("token",token);
        
           res.redirect("/shop");
        })
    })

   }

   catch(err){
    res.send(err.message);
    console.log(err.message);
   }

    

    


}


module.exports.loginUser= async function (req,res){

    let {email, password}= req.body;

let user = await userModel.findOne({email});

if(!user) {
    req.flash("error","email or password is wrong")

        return res.redirect("/");
}

bcrypt.compare(password,user.password,function(err,result){
    if(result){

       const token= generateToken(user);

       res.cookie("token",token);
        
        res.redirect("/shop")

    }
    else {
        req.flash("error","email or password is wrong")

        return res.redirect("/");
    }
})



}




module.exports.logoutUser= async function (req,res){

    res.cookie("token","")

    req.flash("error","succesfully logout");

    return res.redirect("/");
   




}  