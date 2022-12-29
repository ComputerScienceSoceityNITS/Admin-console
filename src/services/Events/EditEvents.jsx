import axios from 'axios';
import React from 'react'
import ServerUrl from '../../ServerUrl';
import { toast } from 'react-toastify';
const EditEvents = async (sendForm,id) => {

  try {
    const res = await axios.put(
      `${ServerUrl}/event/${id}`,
      sendForm,
      // sendData,
      {
        headers:{"Content-Type":"multipart/form-data"}
      }
    );
    toast.success("Event Edited")
    console.log(id);
    return res.data.members

  } catch (err) {
    console.log(err);
    toast.error("There's an error")
  }
}

export default EditEvents
