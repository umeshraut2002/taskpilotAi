import mongoose, {Schema} from "mongoose";
import { type } from "os";

const projectSchema = new Schema({

    name: {
        type: String,
        require: true,
        uinique: true,
        trim: true
    },

    description: {
        type: String,
        require: true
    },

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true
    }

}, {timestamps: true})

export const Project = mongoose.model("Project", projectSchema);