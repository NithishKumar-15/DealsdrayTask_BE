import Express from "express";
import getEmployeeDetController from "../Controller/getEmployeeDetController.js";

const getEmployeeDetRouter=Express.Router();

getEmployeeDetRouter.get("/",getEmployeeDetController);

export default getEmployeeDetRouter;