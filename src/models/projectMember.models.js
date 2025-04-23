import mongoose, {Schema} from "mongoose";
import { type } from "os";

const projectMemberSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true
    },

    project: {
        type: String,
        require: true
    },

    role: {
        
    }

}, {timestamps: true})

export const ProjectMember = mongoose.model("ProjectMember", projectMemberSchema);