import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect("mongodb+srv://zainarfeen87:XNyh5tjYgOKY4MBT@sample.fh9zpdj.mongodb.net/");
        console.log('Successfully connected to MongoDB Atlas');
        XNyh5tjYgOKY4MBT
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error.message);
    };
};

export default connect;