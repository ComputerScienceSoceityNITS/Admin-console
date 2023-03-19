import axios from "axios";
import { toast } from "react-toastify";

function getCookie(key) {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}

const EditMembers = async (
  sendForm,
  id,
  setDataTransfer,
  reloadReq,
  setReloadReq
) => {
  const ServerUrl = process.env.REACT_APP_SERVER_URL;

  try {
    const Role = getCookie("CSS_Website_Role");
    if (Role === "admin" || Role === "Executive Head" || true //remove true
    ) {
      const res = await axios.put(`${ServerUrl}/member/${id}`, sendForm, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Member Updated");
      setDataTransfer(false);
      setReloadReq(!reloadReq);
      return res.data.members;
    } else {
      toast.error("You don't have access to perform this function");
      setDataTransfer(false);
    }
  } catch (err) {
    toast.error(err.message);
    setDataTransfer(false);
  }
};

export default EditMembers;
