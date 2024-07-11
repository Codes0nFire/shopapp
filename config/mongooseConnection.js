const mongoose = require("mongoose");

const dbgr= require("debug")("development:mongoose");
const config=require("config");

mongoose
.connect(`${config.get("MONGODB_URI")}/shopapp`)
.then(function (){
    dbgr("connected to database")
})
.catch(function (err){
    dbgr("not connnected =>",err)
})


module.exports=mongoose.connection;