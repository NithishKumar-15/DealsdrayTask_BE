import EmployeModel from "../Model/employeeModel.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

const employeeLoginController=async(req,res)=>{
    try{
        const data=await EmployeModel.findOne({f_Name:req.body.name}).select({_id:0,f_Mobile:0,f_Course:0,f_Designation:0,f_Gender:0,f_CreatedDate:0,f_Image:0});
        if(data!=null){
            const comparePwd=await bcrypt.compare(req.body.password,data.f_Password);
            if(comparePwd){
                const profileData=await EmployeModel.findOne({f_Name:req.body.name},'-f_Password');
                const token=jwt.sign({...data},process.env.JWTSECRETKEY,{algorithm:"HS256",expiresIn:"15m"});
                res.send({message:"Login successful",token,profileData})
            }else{
                res.send({message:"password incorrect"})
            }
            
        }else{
            res.send({message:"user not found"});
        }

    }catch(e){
        res.status(500).send({message:"internal server error",e})
    }
}

export default employeeLoginController;