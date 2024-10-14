import Express from "express";
import employeeDetController from "../Controller/employeeDetController.js";

const employeedetRouter=Express.Router();

employeedetRouter.post("/",employeeDetController);

export default employeedetRouter;