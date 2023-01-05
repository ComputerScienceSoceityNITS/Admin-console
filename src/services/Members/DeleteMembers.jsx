import axios from 'axios';
import { toast } from 'react-toastify';

const DeleteMembers = async (id, reloadReq, setReloadReq) => {
  const ServerUrl = process.env.REACT_APP_SERVER_URL;
  try {
    const res = await axios.delete(
      `${ServerUrl}/member/${id}`
    );
    toast.success("deleted successfully");
    setReloadReq(!reloadReq);
    return res;
  } catch (err) {
    toast.error(err.message);
    return err;
  }
}
export default DeleteMembers