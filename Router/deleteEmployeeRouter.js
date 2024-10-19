import Express from "express";
import deleteEmployeeController from "../Controller/deleteEmployeeController.js";

const deleteEmployeeRouter = Express.Router();

deleteEmployeeRouter.delete("", deleteEmployeeController);

export default deleteEmployeeRouter;