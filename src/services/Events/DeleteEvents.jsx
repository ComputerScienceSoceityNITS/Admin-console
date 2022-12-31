import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';
import ServerUrl from '../../ServerUrl';

const DeleteEvents = async (id) => {
    try {
        const res = await axios.delete(
          `${ServerUrl}/event/${id}`
        );
        console.log(res);
        toast.success("deleted successfully")
        return res;
      } catch (err) {
        return err;
        // console.log(err);
      }
}
export default DeleteEvents




