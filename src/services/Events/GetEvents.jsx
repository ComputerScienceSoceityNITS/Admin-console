import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';
import ServerUrl from '../../ServerUrl';

const GetEvents = async () => {
    try {
        const res = await axios.get(
<<<<<<< HEAD:src/services/GetMembers.jsx
          "http://tasty-crab-hosiery.cyclic.app/api/admin/members/21-22"
=======
          `${ServerUrl}/events`
>>>>>>> 4a97023ba54b684c1753b8b899205a4ec530b612:src/services/Events/GetEvents.jsx
        );
        console.log("hello");
        // toast.success("success")

        return (res.data.events);
      } catch (err) {
        toast.error(err)
      }
}

export default GetEvents
