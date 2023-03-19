import axios from "axios";
import { toast } from "react-toastify";

function getCookie(key) {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}

const EditEvents = async (
  sendForm,
  id,
  setDataTransfer,
  reloadReq,
  setReloadReq,
  event
) => {
  const ServerUrl = process.env.REACT_APP_SERVER_URL;
  try {
    const Role = getCookie("CSS_Website_Role");
    if (
      Role === "Admin" ||
      (Role === "Executive Head" && event === "abacus") ||
      (Role === "CP Head" && event === "enigma") || true //remove true
    ) {
      const res = await axios.patch(`${ServerUrl}/${event}/${id}`, sendForm, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setDataTransfer(false);
      setReloadReq(!reloadReq);
      toast.success("Event Updated");
      return res.data.members;
    } else {
      toast.error("You don't have access to perform this operation");
      setDataTransfer(false);
    }
  } catch (err) {
    setDataTransfer(false);
    toast.error(err.message);
  }
};

export default EditEvents;
