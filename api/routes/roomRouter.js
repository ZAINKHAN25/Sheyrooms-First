import { Router } from "express";
import { roomModel } from "../models/rooms.js";

const router = Router();

router.get("/getallrooms", async (req, res) => {


    try {
        const rooms = await roomModel.find({});
        console.log(rooms);
        res.send(rooms);

    } catch (error) {
        return res.status(400).json({ message: error })
    }


});

export default router;
