import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';

const EditMembers = async (sendForm, id) => {

  try {
    const res = await axios.put(
      `http://localhost:5000/api/admin/member/${id}`,
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
