import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import ServerUrl from '../../ServerUrl';

const GetMembers = async (session) => {

  try {
    const res = await axios.get(
      `${ServerUrl}/members/${session}`,
      // `http://tasty-crab-hosiery.cyclic.app/api/admin/members/${session}`
      // {
      //   withCredentials:true
      // }
    );
    // toast.success("success")
    return (res.data.members);
  } catch (err) {
    toast.error(err)
  }
}

export default GetMembers
