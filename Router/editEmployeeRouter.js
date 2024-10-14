import Express from "express";
import editEmployeeController from "../Controller/editEmployeeDetController.js";
import { deleteEmployeeController } from "../Controller/editEmployeeDetController.js";

const editEmployeeRouter=Express.Router();

editEmployeeRouter.put("/",editEmployeeController);

editEmployeeRouter.delete("/deleteEmp",deleteEmployeeController)

export default editEmployeeRouter;