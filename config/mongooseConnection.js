const mongoose = require("mongoose");

mongoose
.connect("mongodb://127.0.0.1:27017/shopapp")
.then(function (){
    console.log("connected to database")
})
.catch(function (err){
    console.log("not connnected =>",err)
})


module.exports=mongoose.connection;