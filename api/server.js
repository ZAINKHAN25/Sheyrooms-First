import express from "express";
import connectDB from "./db.js";

const app = express();

const port =  5000;

connectDB()
.then(res => console.log("connected successfully"))
.catch(err => console.log("Error ==>", err.message));

app.listen(port, () => console.log(`Server Running of port ${port}`));