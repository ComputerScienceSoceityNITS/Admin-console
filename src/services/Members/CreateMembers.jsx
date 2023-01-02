import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';
import ServerUrl from '../../ServerUrl';

const CreateMembers = async (sendForm, setDataTransfer) => {
  try {
    const res = await axios.post(
      `${ServerUrl}/member/new`,
      sendForm,
      // sendData,
      {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true
      }
    );
    toast.success("Members Created");
    setDataTransfer(false);
    return res.data.members

  } catch (err) {
    console.log(err);
    toast.error("There's an error");
    setDataTransfer(false);
  }

}

export default CreateMembers
