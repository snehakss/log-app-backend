const mongoose=require("mongoose")

const logSchema=mongoose.Schema(
    {
        name:String,
        age:String,
        phone:String,
        address:String,
        pincode:String,
        emailid:String,
        password:String
    }
)

module.exports=mongoose.model("logs",logSchema)