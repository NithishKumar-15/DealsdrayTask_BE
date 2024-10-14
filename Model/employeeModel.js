import mongoose from "mongoose";

const employeeScheman=new mongoose.Schema({
    f_Id:{
        type:Number,
        required: true,
    },
    f_Image:{
        type:String,
        required: true,
    },
    f_Name:{
        type:String,
        required: true,
    },
    f_Email:{
        type:String,
        required: true,
    },
    f_Mobile:{
        type:Number,
        required:true
    },
    f_Designation:{
        type:String,
        required: true,
    },
    f_Gender:{
        type:String,
        required: true,
    },
    f_Course:{
        type:String,
        required: true,
    },
    f_CreatedDate:{
        type:Date,
        required: true,
    }
});

const EmployeModel=new mongoose.model("EmployeeDet",employeeScheman,"EmployeeDet");

export default EmployeModel;