import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';

const DeleteEvents = async (id) => {
    try {
        const res = await axios.delete(
          `http://localhost:5000/api/admin/event/${id}`
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




