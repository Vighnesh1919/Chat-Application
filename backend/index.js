import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js"; 
import messageRoute from "./routes/messageRoute.js";
import cors from "cors";


import cookieParser from "cookie-parser";
dotenv.config({});

 
const app= express();

const PORT = process.env.PORT||8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());


const corsOption={
    origin:'http:localhost:3000',
    credentials:true
};
app.use(cors(corsOption));

app.use("/api/v1/user",userRoute);
app.use("/api/v1/message",messageRoute);

//http://localhost:8080/api/v1/user/register


app.listen(PORT,()=>{
    connectDB(); 
     console.log(`Server running on port ${PORT}`);
})