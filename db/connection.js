const mongoose =require('mongoose')

const db=process.env.database
 
mongoose.connect(db,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("database connected successfully");
}).catch((error)=>{
    console.log(error);
})
