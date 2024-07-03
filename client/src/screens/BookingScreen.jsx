import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BookingScreen() {
    let { roomid } = useParams(); // Correctly destructure roomid from useParams

    let [room, setRoom] = useState(null); // Initialize room state to null
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await axios.post('/api/rooms/getroombyid', { roomid: roomid });
                const data = res.data;
                setRoom(data);
                console.log(res);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
                console.error('Error fetching room:', error);
            }
        };

        fetchData();
    }, [roomid]);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : error ? (
                <h1>Error fetching room. Please try again later.</h1>
            ) : (
                room && (
                    <div className='d-flex w-100 justify-content-center p-5 my-3'>
                        <div>
                            <h1>{room.name}</h1>
                            <img src={room.imageurls[0]} className='bigimg' />
                        </div>
                        <div className='ms-5'>
                            <div>
                                <h1>Booking Details</h1>
                                <hr />

                                <b>
                                    <p>Name : </p>
                                    <p>From Date : </p>
                                    <p>To Date : </p>
                                    <p>Max Count : {room.maxcount}</p>
                                </b>
                            </div>
                            <div>
                                <b>
                                    <h1>Amount</h1>
                                    <hr />
                                    <p>Total days : </p>
                                    <p>Rent per day: {room.rentperday}</p>
                                    <p>Total amount:</p>
                                </b>
                            </div>
                            <div className='float-end'>
                                <button className='btn btn-primary'>Pay Now</button>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}

export default BookingScreen;
