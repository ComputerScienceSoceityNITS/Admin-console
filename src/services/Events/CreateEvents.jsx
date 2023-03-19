import axios from "axios";
import { toast } from "react-toastify";

function getCookie(key) {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}

const CreateEvents = async (
  sendForm,
  setDataTransfer,
  reloadReq,
  setReloadReq,
  event
) => {
  const ServerUrl = process.env.REACT_APP_SERVER_URL;
  console.log({ event });
  try {
    const Role = getCookie("CSS_Website_Role");
    if (
      Role === "admin" ||
      (Role === "Executive Head" && event === "abacus") ||
      (Role === "CP Head" && event === "enigma") ||
      true //remove true
    ) {
      const res = await axios.post(`${ServerUrl}/${event}/`, sendForm, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res);
      setDataTransfer(false);
      toast.success("Event Created");
      setReloadReq(!reloadReq);
      return res.data;
    } else {
      toast.error("You don't have access to perform this operation");
      setDataTransfer(false);
    }
  } catch (err) {
    // console.log({ err });
    setDataTransfer(false);
    toast.error(err.message);
  }
};

export default CreateEvents;
