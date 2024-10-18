import Express from "express";
import editEmployeeController from "../Controller/editEmployeeDetController.js";

const editEmployeeRouter=Express.Router();

editEmployeeRouter.put("/",editEmployeeController);

export default editEmployeeRouter;