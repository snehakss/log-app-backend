const express=require("express")
const PostModel=require("../model/PostModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    console.log(data)
    let posts=new PostModel(data)
    let result=await posts.save()
    res.json({
        status:"success"
    })
})

router.get("/view",async(req,res)=>{
    let result=
})
module.exports=router