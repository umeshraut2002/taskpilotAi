import mongoose, {mongo, Schema} from "mongoose";

const subTaskSchema = new Schema({})

export const SubTask = mongoose.model("SubTask", subTaskSchema);