import axios from 'axios';
import React from 'react'
import ServerUrl from '../../ServerUrl';
import { toast } from 'react-toastify';

const CreateEvents = async (sendForm) => {
  try {
    const res = await axios.post(
      `${ServerUrl}/event/new`,
      sendForm,
      // sendData,
      {
        headers:{"Content-Type":"multipart/form-data"}
      }
    );
    toast.success("Event Created")
    return res.data.members

  } catch (err) {
    console.log(err);
    toast.error("There's an error")
  }
}

export default CreateEvents
