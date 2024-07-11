const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/shopapp");


const userSchema =mongoose.Schema({


    fullname:String,
    email:String,
    password:String,
    isadmin:Boolean,
    contact:Number,
    picture: String,
    orders:{
        type:Array,
        default:[]
    },

    cart:{
        type:Array,
        default:[]
    }




})



module.exports =mongoose.model("user",userSchema);