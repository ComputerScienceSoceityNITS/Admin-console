import axios from 'axios';
import { toast } from 'react-toastify';

const CreateEvents = async (sendForm, setDataTransfer, reloadReq, setReloadReq, event) => {
  const ServerUrl = process.env.REACT_APP_SERVER_URL;
  try {
    // console.log(sendForm);
    const res = await axios.post(
      `${ServerUrl}/${event}`,
      sendForm,
      {
        headers: { "Content-Type": "multipart/form-data" }
      }
    );
    console.log(res);
    setDataTransfer(false);
    toast.success("Event Created");
    setReloadReq(!reloadReq);
    return res.data;
  } catch (err) {
    console.log(err);
    setDataTransfer(false);
    toast.error(err.message);
  }
}

export default CreateEvents
