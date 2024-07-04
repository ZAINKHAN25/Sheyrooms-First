import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BounceLoader } from "react-spinners"
import ErrorComponent from '../components/Error.jsx';

function BookingScreen() {
    let { roomid } = useParams();

    let [room, setRoom] = useState(null); // Initialize room state to null
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(false);

    console.log(roomid);

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
                <div className='loading-page'><BounceLoader size={100} /></div>
            ) : error ? (
                <ErrorComponent />
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
