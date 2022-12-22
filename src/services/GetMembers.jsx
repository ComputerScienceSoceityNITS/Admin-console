import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';

const GetMembers = async () => {
    try {
        const res = await axios.get(
          "http://localhost:5000/api/admin/members/21-22"
        );
        // toast.success("success")
        return (res.data.members);
      } catch (err) {
        toast.error(err)
      }
}

export default GetMembers
