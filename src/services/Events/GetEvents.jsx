import axios from 'axios';
import { toast } from 'react-toastify';

const GetEvents = async () => {
  const ServerUrl = process.env.REACT_APP_SERVER_URL;
  try {
    const res = await axios.get(

      `${ServerUrl}/events`
    );

    return (res.data.events);
  } catch (err) {
    toast.error(err.message);
  }
}

export default GetEvents
