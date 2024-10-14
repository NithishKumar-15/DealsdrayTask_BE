import EmployeModel from "../Model/employeeModel.js";


const editEmployeeController=async(req,res)=>{
    try{
        await EmployeModel.updateOne({f_Id:req.body.f_Id},{f_Name:req.body.f_Name,f_Email:req.body.f_Email,f_Mobile:req.body.f_Mobile,})
        res.send({message:"updated successfully"})
    }catch(e){
        res.status(500).send({message:"internal server error",e})
    }
}

const deleteEmployeeController=async(req,res)=>{
    try{
        
        await EmployeModel.deleteOne({f_Id:req.headers.id});
        res.send({message:"data deleted success"})
    }catch(e){
        res.status(500).send({message:"internal server error",e})
    }
}

export default editEmployeeController;

export {deleteEmployeeController};