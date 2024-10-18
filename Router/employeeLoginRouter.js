import express from "express";
import employeeLoginController from "../Controller/employeeLoginController.js";


const employeeLoginRouter=express.Router();

employeeLoginRouter.post("",employeeLoginController);

export default employeeLoginRouter;
