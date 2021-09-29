const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema=new Schema({
    name: {
        type:String,
        required:true,
    },
    age:Number,
    Adresse:String
})

const User=mongoose.model("user",user)
module.exports=User;