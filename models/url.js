import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectURL:{
        type:String,
        required:true
    },
    vistiHistory:[{timestamp:{type : Number}}]
}, {timestamps:true});

const URL = mongoose.model('url' , urlSchema)

export {URL};