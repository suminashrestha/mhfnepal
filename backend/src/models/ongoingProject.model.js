import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: [true,"Title is requred"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    status: {
        type: String,
        enum: ["Active", "Processing", "InActive"],
        default: "InActive",
        required: true,
    }
},{timestamps: true})


export const OngoingProject = mongoose.model("OngoingProject", projectSchema)