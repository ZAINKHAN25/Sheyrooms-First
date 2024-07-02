import React, { useEffect } from 'react';
import axios from "axios";

function Homescreen() {

  useEffect(async () => {

    try {
      const res = await axios.get('/api/rooms/getallrooms');
      console.log(res.data);

    } catch (error) {
      console.log(error);
    }


  }, [])

  return (
    <div>
      <h1>Home Screen</h1>
    </div>
  )
}

export default Homescreen;