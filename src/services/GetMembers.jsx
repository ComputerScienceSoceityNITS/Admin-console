import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const GetMembers = async (session) => {
  try {
    const res = await axios.get(
      // `http://localhost:5000/api/admin/members/${session}`
      `http://tasty-crab-hosiery.cyclic.app/api/admin/members/${session}`
    );
    // toast.success("success")
    return (res.data.members);
  } catch (err) {
    toast.error(err)
  }
}

export default GetMembers
