import mongoose from "mongoose";

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB connected successfully")
    } catch(err){
        console.error("MongoBN connection failed", err)
        process.exit(1);
    }
}

export default connectDB;
