import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';

const GetEvents = async () => {
    try {
        const res = await axios.get(
          "http://localhost:5000/api/admin/events"
        );
        console.log("hello");
        // toast.success("success")

        return (res.data.events);
      } catch (err) {
        toast.error(err)
      }
}

export default GetEvents
