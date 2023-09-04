const jwt=require('jsonwebtoken')



const loggmiddleware=(req,res,next)=>{
    console.log('routerspecific');

    ////
    const token=req.headers['authorization']
    console.log(token);
   
    try{
        const jwtresponse=jwt.verify(token,"thoufeeq")
    console.log(jwtresponse);
    next()
    }
    catch(error){
        res.status(400).json('please login')
    }

   
}

module.exports={loggmiddleware}
