const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

app.set("view engine" , "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname , "public")));





app.get("/" , (req,res)=>{
    res.send("Working....");
});


app.listen(3000);