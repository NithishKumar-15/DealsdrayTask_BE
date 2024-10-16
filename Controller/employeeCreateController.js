import EmployeModel from "../Model/employeeModel.js";
import bcrypt from 'bcrypt'

const employeeCreateController=async(req,res)=>{
    try{    
        if(req.body.f_Gender.toUpperCase()==="MALE"|| req.body.f_Gender.toUpperCase()==="FEMALE"){
            const hashedPassword=await bcrypt.hash(req.body.f_Password,10);
            const data=new EmployeModel({
                ...req.body,
                f_Password:hashedPassword
            });
            await data.save();
            res.send({message:"data added successfully"})
        }else{
            res.send({message:"gender invalid"})
        }
      

    }catch(e){
        res.status(500).send({message:"internal server error",e})
    }
}

export default employeeCreateController;