import { AutoIncrementID } from "@typegoose/auto-increment";
import mongoose from "mongoose";


const optionSchema=new mongoose.Schema({
    _id:{type:Number},
    text:{type:String},
    votes:{type:Number},
    Link_to_Vote:{type:String},
});

optionSchema.plugin(AutoIncrementID,{});

export const optionModel= mongoose.model("options", optionSchema);

const voteSchema= new mongoose.Schema({
    _id:{type:Number},
    title:{type:String},
    options:[{type: JSON}]
});

voteSchema.plugin(AutoIncrementID,{});

export const voteModel= mongoose.model("vote", voteSchema);
