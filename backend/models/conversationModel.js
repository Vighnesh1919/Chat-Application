import mongoose from "mongoose";

const conversationModel= new mongoose.Schema({

    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],

    messages:[// refernce by messagemodel
        {
            type:mongoose.Schema.Types.ObjectId,
        ref:"Message"
        }
    ]

},{timestamps:true});

export const Conversation =mongoose.model("Conversation",conversationModel);