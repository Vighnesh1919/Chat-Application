import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Ensure environment variables are loaded

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('Database connected'))
        .catch((error) => console.log(error));
};

export default connectDB;
