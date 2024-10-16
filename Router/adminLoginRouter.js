import Express from "express";
import adminLoginController from "../Controller/adminLoginController.js";

const adminLoginRouter=Express.Router();

adminLoginRouter.post("/",adminLoginController);

export default adminLoginRouter;