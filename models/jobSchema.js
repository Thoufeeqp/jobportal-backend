const mongoose=require('mongoose')
const jobSchema=mongoose.Schema({
    
    today:{
        type:Date,
        required:true
    }
    ,
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    jobtitle:{
        type:String,
        required:true
    },
    jobdesc:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    }
})

const jobs=mongoose.model("jobs",jobSchema)
module.exports=jobs