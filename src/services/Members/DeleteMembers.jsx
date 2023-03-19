import axios from "axios";
import { toast } from "react-toastify";

function getCookie(key) {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}

const DeleteMembers = async (id, reloadReq, setReloadReq) => {
  const ServerUrl = process.env.REACT_APP_SERVER_URL;
  try {
    const Role = getCookie("CSS_Website_Role");
    if (
      Role === "admin" ||
      Role === "Executive Head" ||
      true //remove true
    ) {
      const res = await axios.delete(`${ServerUrl}/member/${id}`);
      toast.success("deleted successfully");
      setReloadReq(!reloadReq);
      return res;
    } else {
      toast.error("You don't have access to perform this function");
    }
  } catch (err) {
    toast.error(err.message);
    return err;
  }
};
export default DeleteMembers;
