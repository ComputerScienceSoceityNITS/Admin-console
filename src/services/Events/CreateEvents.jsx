import axios from 'axios';
import React from 'react'
import ServerUrl from '../../ServerUrl';
import { toast } from 'react-toastify';

const CreateEvents = async (sendForm, setDataTransfer) => {
  try {
    const res = await axios.post(
      `${ServerUrl}/event/new`,
      sendForm,
      // sendData,
      {
        headers: { "Content-Type": "multipart/form-data" }
      }
    );
    setDataTransfer(false);
    toast.success("Event Created");
    console.log({ res });
    return res.data;

  } catch (err) {
    console.log(err);
    setDataTransfer(false);
    toast.error("There's an error");
  }
}

export default CreateEvents
