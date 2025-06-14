import mongoose from "mongoose"

const teamSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    email: {
        type : String,
        required: true,
        unique: true,
    },
    position: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    }
    
},{timestamps: true})


export const Team = mongoose.model("Team", teamSchema)