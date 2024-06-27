import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://zainarfeen87:zainarfeen87@sample.k8cmwp5.mongodb.net/mern-rooms")
    } catch (error) {
    }
}

export default connectDB;