import EmployeModel from "../Model/employeeModel.js";

const getEmployeeDetController=async(req,res)=>{
    try{
        const data=await EmployeModel.find();
        res.send({data})
    }catch(e){
        res.status(500).send({message:"internal server error",e})
    }
}

export default getEmployeeDetController;