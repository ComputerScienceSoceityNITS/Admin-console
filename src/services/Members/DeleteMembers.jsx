import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';
import ServerUrl from '../../ServerUrl';

const DeleteMembers = async (id) => {
    try {
        const res = await axios.delete(
          `${ServerUrl}/member/${id}`
        );
        console.log(res);
        toast.success("deleted successfully")
        return res;
      } catch (err) {
        return err;
        // console.log(err);
      }
}
export default DeleteMembers