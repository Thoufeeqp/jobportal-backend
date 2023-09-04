const mongoose=require('mongoose')

const freelancerSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const freelancers=mongoose.model("freelancers",freelancerSchema)
module.exports=freelancers