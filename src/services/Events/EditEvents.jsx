import axios from 'axios';
import { toast } from 'react-toastify';

const EditEvents = async (sendForm, id, setDataTransfer, reloadReq, setReloadReq) => {
  const ServerUrl = process.env.REACT_APP_SERVER_URL;
  try {
    const res = await axios.put(
      `${ServerUrl}/event/${id}`,
      sendForm,
      {
        headers: { "Content-Type": "multipart/form-data" }
      }
    );
    setDataTransfer(false);
    setReloadReq(!reloadReq);
    toast.success("Event Updated");
    return res.data.members
  } catch (err) {
    setDataTransfer(false);
    toast.error(err.message)
  }
}

export default EditEvents
