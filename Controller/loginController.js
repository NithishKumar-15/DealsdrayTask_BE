import LoginModel from "../Model/loginModel.js";


const loginController=async(req,res)=>{
    try{
        const data=await LoginModel.findOne({f_userName:req.body.name,f_pwd:req.body.password});

        if(data!=null){
            res.send({message:"Login successful"})
        }else{
            res.send({message:"user not found"})
        }

    }catch(e){
        res.status(500).send({message:"internal server error",e})
    }
}

export default loginController;