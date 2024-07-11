const cookieParser = require("cookie-parser");
const  express= require("express");
const app= express();
const path= require("path");

const db= require("./config/mongooseConnection");
const ownersRouter=require("./routes/ownersRouter");
const usersRouter= require('./routes/usersRouter');
const productsRouter= require("./routes/productsRouter");
const indexRouter= require("./routes/index");
require("dotenv").config();




app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));



// app.get("/",function (req,res){
//     res.send("yes working")
// })

app.use("/",indexRouter);
app.use("/owners",ownersRouter);
app.use("/products",productsRouter);
app.use("/users",usersRouter);

app.listen(3000);