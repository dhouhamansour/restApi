const express = require("express")
const mongoose= require("mongoose")
const app= express()
const port=3000 
app.use(express.json())
app.use("/",require("./routes/userRoute.js"))
mongoose.connect("mongodb+srv://dhouha:ranouch95@cluster0.bpggj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",(err)=>err ? console.log(err):console.log("database is connected"))
app.listen(port,()=>console.log("listening on port :"+port))