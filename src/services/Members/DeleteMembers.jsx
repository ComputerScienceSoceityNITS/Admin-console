import axios from 'axios';
import { toast } from 'react-toastify';

const DeleteMembers = async (id) => {
  const ServerUrl = process.env.REACT_APP_SERVER_URL;
  try {
    const res = await axios.delete(
      `${ServerUrl}/member/${id}`
    );
    toast.success("deleted successfully")
    return res;
  } catch (err) {
    return err;
  }
}
export default DeleteMembers