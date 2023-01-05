import axios from 'axios';
import { toast } from 'react-toastify';

const EditMembers = async (sendForm, id, setDataTransfer, reloadReq, setReloadReq) => {
  const ServerUrl = process.env.REACT_APP_SERVER_URL;

  try {
    const res = await axios.put(
      `${ServerUrl}/member/${id}`,
      sendForm,
      {
        headers: { "Content-Type": "multipart/form-data" }
      }
    );
    toast.success("Member Updated");
    setDataTransfer(false);
    setReloadReq(!reloadReq);
    return res.data.members

  } catch (err) {
    toast.error(err.message);
    setDataTransfer(false);
  }

}

export default EditMembers
