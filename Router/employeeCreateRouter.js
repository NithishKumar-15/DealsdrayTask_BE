import Express from "express";
import employeeCreateController from "../Controller/employeeCreateController.js";

const employeeCreatRouter=Express.Router();

employeeCreatRouter.post("/",employeeCreateController);

export default employeeCreatRouter;