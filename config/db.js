import mongoose from "mongoose";

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connectedd")
    }catch(err){
        console.err(err)
        process.exit(1);
    }
}

export default connectDB
