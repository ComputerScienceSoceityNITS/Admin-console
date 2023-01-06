import axios from 'axios';
import { toast } from 'react-toastify';

const CreateEvents = async (sendForm, setDataTransfer, reloadReq, setReloadReq) => {
  const ServerUrl = process.env.REACT_APP_SERVER_URL;
  try {
    const res = await axios.post(
      `${ServerUrl}/event/new`,
      sendForm,
      {
        headers: { "Content-Type": "multipart/form-data" }
      }
    );
    setDataTransfer(false);
    toast.success("Event Created");
    setReloadReq(!reloadReq);
    return res.data;
  } catch (err) {
    setDataTransfer(false);
    toast.error(err.message);
  }
}

export default CreateEvents
