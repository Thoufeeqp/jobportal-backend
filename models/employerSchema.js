const mongoose=require('mongoose')
const emplyerSchema=mongoose.Schema({
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

const employers=mongoose.model("employers",emplyerSchema)
module.exports=employers