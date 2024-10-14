import mongoose from "mongoose";


const url="mongodb://127.0.0.1:27017/DealsdrayTask";




const dbConnection=async()=>{
    try{
        await mongoose.connect(url);
        mongoose.set("autoIndex",false)
        console.log("DB Connection successful")
    }catch(e){
        console.log("Db Connection failed",e);
        process.exit(1);
    }
}
export default dbConnection;