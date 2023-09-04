require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router = require('./routes/router')
require('./db/connection')
const middleware=require('./middleware/routerspecifc')



const server=express()

server.use(cors())
server.use(express.json())

server.use(router)

const PORT=process.env.PORT ||3000

server.listen(PORT,()=>{
    console.log('server started at 3000');

})

server.get('/',(req,res)=>{
    res.status(200).json('server start')
})