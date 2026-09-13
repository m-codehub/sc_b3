const express=require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/csec_catters")
.then(()=>{
    console.log("mongodb is connected")
})
.catch((e)=>{
    console.log(`error is ${e}`)
})

const productSchema=mongoose.Schema({
    name:"String",
    price:"Number",
    modelYear:"Number",
    discount:"Number"
})
const product=mongoose.model("products",productSchema)

app.post("/cp",(req,res)=>{
    const p1=product.insertOne(req.body)
    res.send("product is created")
})

app.post("/mp",(req,res)=>{
    const p2=product.insertMany(req.body)
    res.send("Multiple objects are created")
})

app.listen(5698,()=>{
    console.log("server is running at http://localhost:5698")
})  
