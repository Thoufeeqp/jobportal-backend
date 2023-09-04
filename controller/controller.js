const employers=require('../models/employerSchema')
const freelancers = require('../models/freelancerSchema')
const jobs=require('../models/jobSchema')
const applications=require("../models/applicationSchema")
const jwt=require('jsonwebtoken')

exports.register=async(req,res)=>{
    
    const{username,email,password}=req.body
    
    try{
     const preuser=await employers.findOne({username,password})
     if(preuser){
        res.status(400).json("user already exist")
     }
     else{
          const newuser=new employers({
            username,
            email,
            password
          })    
         await newuser.save()
         res.status(200).json(newuser)
     }
    }   
    catch(error){
        res.status(401).json(error)
    }
}

exports.regfree=async(req,res)=>{
      
    const{username,email,password}=req.body
    
    try{
     const preuser=await freelancers.findOne({username,password})
     if(preuser){
        res.status(400).json("user already exist")
     }
     else{
          const newuser=new freelancers({
            username,
            email,
            password
          })    
         await newuser.save()
         res.status(200).json(newuser)
     }
    }   
    catch(error){
        res.status(401).json(error)
    }

}

exports.loginemployer=async(req,res)=>{
    const {username,password}=req.body
 try{
    const user=await employers.findOne({username,password})
    if(user){
        const token=jwt.sign({
            loginempusername:username
        },"thoufeeq")
        res.status(200).json({user,token})
    }
    else{
        res.status(402).json("invalid username or password")
    }
 }
 catch(error){
    res.status(400).json(error)
 }

}

exports.loginfreelancer=async(req,res)=>{
    const {username,password}=req.body
 try{
    const user=await freelancers.findOne({username,password})
    if(user){
        const token=jwt.sign({
            loginfreeusername:username
        },"thoufeeq")
        res.status(200).json({user,token})
    }
    else{
        res.status(402).json("invalid username or password")
    }
 }
 catch(error){
    res.status(400).json(error)
 }

}

exports.postjob=async(req,res)=>{
    const{today,username,password,jobtitle,jobdesc,experience,place,salary}=req.body
    try{
        const newjob=new jobs({
            
              today,
            username,
            password,
            jobtitle,
            jobdesc,
            experience,
            place,
            salary
        })
        await newjob.save()
        res.status(200).json(newjob)

    }
    catch(error){
        res.status(400).json(error)
    }
} 

exports.getjob=async(req,res)=>{
    const{username,password}=req.body
    console.log(username,password);
    try{
      const alljobs= await jobs.find({username,password})
      res.status(200).json(alljobs)
    }
    catch(error){
        res.status(401).json(error)
    }
}


exports.freelancerjobs=async(req,res)=>{
   try{
    const freelancerjobs=await jobs.find()
    res.status(200).json(freelancerjobs)
   }
   catch(error){
    res.status(400).json(error)
   }

}

exports.view=async(req,res)=>{
    console.log('kaka parannu');
    const {viewid}=req.body
    console.log(viewid);
    let _id=viewid
try{
    
    const item=await jobs.findOne({_id})
    res.status(200).json(item)
}
catch(error){
    res.status(401).json(error)
}
    
}

exports.apply=async(req,res)=>{
    const{jobid,name,email,phone,link,company,question}=req.body
try{
   
    const newapplication=new applications({
        jobid,
        name,
        email,
        phone,
        link,
        company,
        question
    })
    await newapplication.save()
    res.status(200).json(newapplication)
}
catch(error){
    res.status(401).json(error)

}
    

}
exports.fetchapplicants=async(req,res)=>{
    const{id}=req.body
    let jobid=id
    try{

    const response=await applications.find({jobid})
    res.status(200).json(response)

    }
    catch(error){
        res.status(401).json(error)
    }
}

exports.delete=async(req,res)=>{
    console.log("delete ullil");
    const{id}=req.body
    console.log(id);
    let _id=id
    try{
        
      await jobs.deleteOne({_id})
      res.status(200).json("deleted successfully")
    }
    catch(error){
        res.status(400).json(error)
    }
}

exports.deleteaccount=async(req,res)=>{
    const{username,password}=req.body
    try{
      await employers.deleteOne({username,password})
      res.status(200).json("account deleted")
    }
    catch(error){
        res.status(401).json(error)
    }
}

exports.deleteaccountfree=async(req,res)=>{
    const{username,password}=req.body
    try{
      await freelancers.deleteOne({username,password})
      res.status(200).json("account deleted")
    }
    catch(error){
        res.status(401).json(error)
    }
}