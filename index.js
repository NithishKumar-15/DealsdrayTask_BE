import Express from "express";
import dbConnection from "./DB/dbConnection.js";
import loginRouter from "./Router/loginRouter.js";
import employeedetRouter from "./Router/employeDetRouter.js";
import getEmployeeDetRouter from "./Router/getEmployeeDetRouter.js";
import editEmployeeRouter from "./Router/editEmployeeRouter.js";

import cors from "cors"

const server=Express();

server.use(cors());

server.use(Express.json());

await dbConnection();

server.use("/Login",loginRouter);
server.use("/CreateEmployee",employeedetRouter);
server.use("/GetEmployeeDetails",getEmployeeDetRouter)
server.use("/EditEmployeeDet",editEmployeeRouter);

server.listen(4000,(err)=>{
    if(err){
        console.log("Connection failed")
    }else{
        console.log("Server listerning in port 4000")
    }
})