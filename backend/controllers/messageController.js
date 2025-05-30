import { Conversation } from "../models/conversationModel.js";

export const sendMessage = async (req,res)=>{
    try{

        const senderId=req.id;'// sender id is the login user id thatis stored in the re.id in middleware '
        const receiverId=req.param.id

        const {message}= req.body;
        let gotConversation = await Conversation.findOne({
            // see conversation Model .js in models

            participants:{$all:[senderId,receiverId]},


        });
        if(!gotConversation){// means no initial converstation exist 
          
            gotConversation=await Conversation.create({
                participants:[senderId,receiverId]
            })
        };

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message,
        });


        if(newMessage){
            gotConversation.messages.push(newMessage,_id);
        };
        await gotConversation.save();

        return res.status(201).json({
            message:"Message send successfully."
        })
    }catch(error){
        console.log(error);

    }
}

export const getMessage = async(req,res)=>{
    try{

        const receiverId=req.params.id;// stored in it 
        const senderId=req.id;
        const conversation=await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}

        }).populate("messages");
        // console.log(conversation);
        return res.status(200).json(conversation?.messages);

    } catch (error){
        console.log(error);
    }
}