import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:[true,"Email is Required"],
        maxlength:20
    },
    email:{
        type:String,
        required:[true,"Email is Required"],
    },
    password:{
        type:String,
        required:[true,"Email is Required"],
    }
})

export const UserModel=mongoose.model("User",UserSchema)