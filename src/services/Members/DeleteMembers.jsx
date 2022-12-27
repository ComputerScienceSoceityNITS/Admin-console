import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';

const DeleteMembers = async (id) => {
    try {
        const res = await axios.delete(
          `http://localhost:5000/api/admin/member/${id}`
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