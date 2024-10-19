import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const url = process.env.DBCLUSTER;

const dbConnection = async () => {
    try {
        await mongoose.connect(url);
        mongoose.set("autoIndex", false)
        console.log("DB Connection successful")
    } catch (e) {
        console.log("Db Connection failed", e);
        process.exit(1);
    }
}
export default dbConnection;