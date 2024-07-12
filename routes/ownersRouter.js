 const express= require("express");
 const ownerModel= require("../models/ownerModel");

 const router= express.Router();


 if(process.env.NODE_ENV == "development"){
    router.post("/create", async function(req,res){

        const owner= await ownerModel.find();

        if(owner.length > 0){
            return res.status(500)
            .send("There is already owner for this app");
        }

        let {fullname,email,password}= req.body;

        const createdowner= await ownerModel.create({



            fullname,
            email,
            password,
            

        })

        res.send(createdowner);
       
    })
}




router.get("/admin",function(req,res){
    res.render("createproduct");
})






module.exports=router;
 