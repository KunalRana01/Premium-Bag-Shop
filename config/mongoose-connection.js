const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose")
const config = require("config")

mongoose.connect(`${config.get("MONGODB_URI")}/scatch`).then(()=>{
    dbgr("DB Connected....");
}).catch((err)=>{
    dbgr(err);
})



module.exports = mongoose.connection;