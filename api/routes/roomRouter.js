import { Router } from "express";
import { roomModel } from "../models/rooms.js";

const router = Router();

router.get("/getallrooms", async (req, res) => {


    try {
        const rooms = await roomModel.find({});
        res.send(rooms);

    } catch (error) {
        return res.status(400).json({ message: error })
    }


});


router.post("/getroombyid", async (req, res) => {

    const roomid = req.body.roomid;
    console.log(roomid);

    try {
        const room = await roomModel.findOne({_id: roomid});
        console.log(room);
        res.send(room);

    } catch (error) {
        return res.status(400).json({ message: error })
    }


});

export default router;
