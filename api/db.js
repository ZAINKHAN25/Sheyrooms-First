import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect("mongodb+srv://zainarfeen87:zainarfeen87@sample.k8cmwp5.mongodb.net/mernroom");
        console.log('Successfully connected to MongoDB Atlas');
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error.message);
    };
};

export default connect;