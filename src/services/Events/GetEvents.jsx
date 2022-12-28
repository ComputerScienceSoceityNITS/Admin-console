import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';
import ServerUrl from '../../ServerUrl';

const GetEvents = async () => {
    try {
        const res = await axios.get(
          `${ServerUrl}/events`
        );
        console.log("hello");
        // toast.success("success")

        return (res.data.events);
      } catch (err) {
        toast.error(err)
      }
}

export default GetEvents
