'use strict'
import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        roles: [
            {
                type: Schema.Types.ObjectId,
                ref: "Role",
            },
        ],
        image: String
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model('User', userSchema);