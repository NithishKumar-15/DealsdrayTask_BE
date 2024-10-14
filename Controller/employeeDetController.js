import EmployeModel from "../Model/employeeModel.js";

const employeeDetController=async(req,res)=>{
    try{    
        if(req.body.f_Gender.toUpperCase()==="MALE"|| req.body.f_Gender.toUpperCase()==="FEMALE"){
            const data=new EmployeModel(req.body);
            await data.save();
            res.send({message:"data added successfully"})
        }else{
            res.send({message:"gender invalid"})
        }
      

    }catch(e){
        res.status(500).send({message:"internal server error",e})
    }
}

export default employeeDetController;