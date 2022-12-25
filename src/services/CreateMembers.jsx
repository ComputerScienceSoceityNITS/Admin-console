import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';

const CreateMembers = async (sendForm) => {

    try {
        const res = await axios.post(
          "http://localhost:5000/api/admin/member/new",
          sendForm,
          // sendData,
          {
            headers:{"Content-Type":"multipart/form-data"}
          }
        );
        toast.success("Members Created")
        return res.data.members

      } catch (err) {
        console.log(err);
        toast.error("There's an error")
      }

}

export default CreateMembers
