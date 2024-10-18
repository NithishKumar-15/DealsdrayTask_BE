import Express from "express";
import dotenv from "dotenv"
import cors from "cors"

import dbConnection from "./DB/dbConnection.js";
import adminLoginRouter from "./Router/adminLoginRouter.js";
import employeeCreatRouter from "./Router/employeeCreateRouter.js";
import getEmployeeDetRouter from "./Router/getEmployeeDetRouter.js";
import editEmployeeRouter from "./Router/editEmployeeRouter.js";
import deleteEmployeeRouter from "./Router/deleteEmployeeRouter.js";


const server=Express();

server.use(cors());

server.use(Express.json());

dotenv.config();

await dbConnection();

server.use("/AdminLogin",adminLoginRouter);

server.use("/CreateEmployee",employeeCreatRouter);
server.use("/GetEmployeeDetails",getEmployeeDetRouter)
server.use("/EditEmployeeDet",editEmployeeRouter);
server.use("/deleteEmp",deleteEmployeeRouter)

server.listen(4000,(err)=>{
    if(err){
        console.log("Connection failed")
    }else{
        console.log("Server listerning in port 4000")
    }
})