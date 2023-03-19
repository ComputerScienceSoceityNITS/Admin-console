import axios from "axios";
import { toast } from "react-toastify";

function getCookie(key) {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}

const CreateMembers = async (
  sendForm,
  setDataTransfer,
  reloadReq,
  setReloadReq
) => {
  const ServerUrl = process.env.REACT_APP_SERVER_URL;
  try {
    const Role = getCookie("CSS_Website_Role");
    console.log(Role);
    if (Role === "Admin" || Role === "Executive Head") {
      const res = await axios.post(`${ServerUrl}/member/new`, sendForm, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      console.log(res);
      toast.success("Members Created");
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

export default CreateMembers;
