import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BookingScreen() {
    let { roomid } = useParams();

    let [rooms, setRooms] = useState([]);
    let [loading, setLoading] = useState();
    let [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await axios.post('api/rooms/getroombyid', { roomid: roomid });
                const data = res.data;
                console.log(data);
                setRooms(data);
                setLoading(false);



            } catch (error) {
                setError(true);
                console.log(error);
                setLoading(false);
            }
        };

        fetchData();
        return () => {

        };
    }, []);

    return (
        <div>
            <h1>Booking Screen</h1>
            <h1>Room id = {roomid}</h1>

        </div>
    )
}

export default BookingScreen