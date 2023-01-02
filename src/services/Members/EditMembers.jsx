import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';
import ServerUrl from '../../ServerUrl';

const EditMembers = async (sendForm, id, setDataTransfer) => {

  try {
    const res = await axios.put(
      `${ServerUrl}/member/${id}`,
      sendForm,
      // sendData,
      {
        headers: { "Content-Type": "multipart/form-data" }
      }
    );
    toast.success("Member Updated");
    setDataTransfer(false);
    console.log(id);
    return res.data.members

  } catch (err) {
    console.log(err);
    toast.error("There's an error");
    setDataTransfer(false);
  }

}

export default EditMembers
