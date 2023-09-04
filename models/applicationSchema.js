const mongoose=require("mongoose")


const applicationSchema=mongoose.Schema({
    jobid:{
        type:String,
        required:true

     },
     name:{
        type:String,
        required:true

     },
     email:{
        type:String,
        required:true

     },
     phone:{
        type:String,
        required:true

     },
     link:{
        type:String,
        required:true

     },
     company:{
        type:String,
        required:true

     },
     question:{
        type:String,
        required:true

     }
})

const applications=mongoose.model("applications",applicationSchema)
module.exports=applications