import mongoose from "mongoose";

const LoginSchema=new mongoose.Schema({
    f_userName:{type:String,required:true},
    f_pwd:{type:String,require:true},
});

const LoginModel=new mongoose.model("Admin",LoginSchema,"Admin");

export default LoginModel;