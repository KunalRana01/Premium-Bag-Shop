const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./config/mongoose-connection.js");
const indexRouter = require("./routes/indexRouter.js");
const usersRouter = require("./routes/usersRouter.js");
const productsRouter = require("./routes/productsRouter.js");
const ownersRouter = require("./routes/ownersRouter.js");
const dotenv = require("dotenv").config();  //lets us use the .env vars using process.env.
const app = express();

app.set("view engine" , "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname , "public")));


//defining routes...

app.use("/users" , usersRouter);
app.use("/owners" , ownersRouter);
app.use("/products" , productsRouter);
app.use("/" , indexRouter);

app.listen(3000);