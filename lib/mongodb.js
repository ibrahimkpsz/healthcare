import mongoose from "mongoose";

export const connectDB = async () => {
    const connection = {};
    
    try {
        if (connection.isConnected) return;
        const db = await mongoose.connect(process.env.MONGODB_URI);
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.error(error);
    }
}