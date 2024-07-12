
const userModel=require("../models/userModel");
const bcrypt= require("bcrypt");
const jwt = require("jsonwebtoken");
const {generateToken}= require("../utils/genrateToken")


module.exports.registerUser= async  function(req,res){

    let {fullname, email, password}=req.body;

    let user= await userModel.findOne({email});

    if(user)return res.status(500).send(`user already exists`);


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
        
            res.send(newuser);
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

if(!user)return res.status(500).send("email or password is wrong");

bcrypt.compare(password,user.password,function(err,result){
    if(result){

       const token= generateToken(user);

       res.cookie("token",token);
        
        res.send(" u can login").status(200)

    }
    else res.status(500).send("email or password is wrong");
})



}




module.exports.logoutUser= async function (req,res){

    res.cookie("token","")
    res.redirect("/");




} 