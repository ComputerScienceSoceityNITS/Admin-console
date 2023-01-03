import axios from 'axios';
import { toast } from 'react-toastify';

const CreateMembers = async (sendForm, setDataTransfer) => {
  const ServerUrl = process.env.REACT_APP_SERVER_URL;
  try {
    const res = await axios.post(
      `${ServerUrl}/member/new`,
      sendForm,
      {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true
      }
    );
    toast.success("Members Created");
    setDataTransfer(false);
    return res.data.members

  } catch (err) {
    toast.error("There's an error");
    setDataTransfer(false);
  }

}

export default CreateMembers
