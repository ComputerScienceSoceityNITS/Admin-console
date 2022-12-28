import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';
import ServerUrl from '../../ServerUrl';

const EditMembers = async (sendForm, id) => {

  try {
    const res = await axios.put(
      `${ServerUrl}/member/${id}`,
      sendForm,
      // sendData,
      {
        headers:{"Content-Type":"multipart/form-data"}
      }
    );
    toast.success("Members Edited")
    console.log(id);
    return res.data.members

  } catch (err) {
    console.log(err);
    toast.error("There's an error")
  }

}

export default EditMembers
