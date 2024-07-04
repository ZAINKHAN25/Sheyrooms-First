import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BounceLoader } from "react-spinners"

import Room from '../components/Room';
import ErrorComponent from '../components/Error.jsx';

function Homescreen() {

  let [rooms, setRooms] = useState([]);
  let [loading, setLoading] = useState();
  let [error, setError] = useState();


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get('api/rooms/getallrooms');
        const data = res.data;
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
    <div className='container'>
      <div className="row justify-content-center my-5">

        {loading ? (
          <div className='loading-page'><BounceLoader size={100} /></div>
        ) : error ? (
          <ErrorComponent />
        ) : (
          rooms.map(room => {
            return (
              <div className='com-md-9 mt-2' key={room.id}>
                <Room room={room} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Homescreen;
