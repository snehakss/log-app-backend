const express=require("express")
const user=require("../model/Users")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let logss=new user(data)
    let result=await logss.save()
    res.json({
        status:"success"
    })
})

module.exports=router