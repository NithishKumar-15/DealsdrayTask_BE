import Express from "express";
import dotenv from "dotenv"
import cors from "cors"
import { Server } from "socket.io";
import { createServer } from "http";
import jwt from "jsonwebtoken"

import dbConnection from "./DB/dbConnection.js";
import adminLoginRouter from "./Router/adminLoginRouter.js";
import employeeCreatRouter from "./Router/employeeCreateRouter.js";
import getEmployeeDetRouter from "./Router/getEmployeeDetRouter.js";
import editEmployeeRouter from "./Router/editEmployeeRouter.js";
import deleteEmployeeRouter from "./Router/deleteEmployeeRouter.js";
import employeeLoginRouter from "./Router/employeeLoginRouter.js";

dotenv.config();

const middleware=async(req,res,next)=>{
    try{
         jwt.verify(req.headers.token,process.env.JWTSECRETKEY,(err,verify)=>{
            if(err){
                console.log(err)
                res.send({message:"your unauthorized"})
            }else{
                next();
            }
        });
        // console.log(verifyToken);
        // if(verifyToken){
        //     next();
        // }else{
        //     res.send({message:"your unauthorized"})
        // }
    }catch(e){
        res.status(500).send({message:"internal server error",e})
    }
}

const expServer=Express();

expServer.use(cors());

expServer.use(Express.json());

const server=createServer(expServer);

const io=new Server(server,{
    cors:{
        origin:"*"
    }
})

io.on("connection",(socket)=>{
    socket.on("message",(msg)=>{
        socket.broadcast.emit("message",msg)
    })
    
})

await dbConnection();

expServer.use("/AdminLogin",adminLoginRouter);

expServer.use("/CreateEmployee",middleware,employeeCreatRouter);
expServer.use("/GetEmployeeDetails",middleware,getEmployeeDetRouter)
expServer.use("/EditEmployeeDet",middleware,editEmployeeRouter);
expServer.use("/deleteEmp",middleware,deleteEmployeeRouter);
expServer.use("/employeeLogin",employeeLoginRouter);

server.listen(4000,(err)=>{
    if(err){
        console.log("Connection failed")
    }else{
        console.log("Server listerning in port 4000")
    }
})