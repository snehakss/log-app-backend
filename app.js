const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const SignUpRoute=require("./controller/SignUpRouter")
const PostRoute=require("./controller/PostRouter")
const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://snehaks:Snehaks2000@cluster0.rauhjed.mongodb.net/logDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/log",SignUpRoute)
app.use("/api/post",PostRoute)

app.listen(3001,(req,res)=>{
    console.log("server running")
})