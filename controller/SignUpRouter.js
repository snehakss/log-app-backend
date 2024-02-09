const express=require("express")
const user=require("../model/Users")

const router=express.Router()

const bcrypt=require("bcryptjs")
hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/add",async(req,res)=>{
   // let data=req.body
   // let logss=new user(data)
   // let result=await logss.save()
   //let name=req.body.name
   //let age=req.body.age
   //let phone=req.body.phone
   //let address=req.body.address
   //let pincode=req.body.pincode
   //let emailid=req.body.emailid
   //let password=req.body.password
    
    let {data}={"data":req.body}
    let password=data.password
    hashPasswordGenerator(password).then(
        (hashPassword)=>{
            console.log(hashPassword)
            data.password=hashPassword
            console.log(data)
            let logss=new user(data)
            let result= logss.save()
            res.json({
                status:"success"
            })
        }
    )

    
})



module.exports=router