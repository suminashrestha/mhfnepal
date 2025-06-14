
import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';


const connectDB = async()=>{
    try{
        const connectionInstane= await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`DB CONNECTED: ${connectionInstane.connection.host}`);
    }catch(err){
        console.log("DB CONNECTION FAILED", err);
        process.exit(1);
    }
}

export default connectDB;
