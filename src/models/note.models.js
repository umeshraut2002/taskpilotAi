import { timeStamp } from "console";
import mongoose, {mongo, Schema} from "mongoose";
import { type } from "os";

const noteSchema = new Schema({

    project: {
        type: Schema.Types.ObjectId,
        ref: "Project",
        require: true
    },

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true
    },

    content: {
        type: String,
        require: true
    }

}, {timestamps: true})

export const Note = mongoose.model("Note", noteSchema);