import express from "express";
import connect from "./db.js";
import roomsRoute from "./routes/roomRouter.js";

const app = express();
const port = 5000;

app.use(express.json())

// Connect to MongoDB
connect().then(() => {
    console.log("Connected to MongoDB successfully");

    // Define routes
    app.use('/api/rooms', roomsRoute);

    // Start the server
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
