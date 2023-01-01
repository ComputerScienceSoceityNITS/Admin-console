import React, { useState, useEffect } from "react";
import "../styles/MemberPage.css";
import MemberGrid from "../components/memberGrid";
import MemberCreate from "../components/MemberCreate";
import Loader from "../components/loader";
import GetMembers from "../services/Members/GetMembers";
import "toastify-js/src/toastify.css";
import DeleteMembers from "../services/Members/DeleteMembers";
import { toast } from "react-toastify";

const MemberPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [addMember, setAddMember] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [dataReserved, setDataReserved] = useState([]);
  const [members, setMembers] = useState([]);

  const fetch = async (session) => {
    setLoading(true);
    const members = await GetMembers(session);
    setData(members);
    setLoading(false);
    console.log(members);
  };

  useEffect(() => {
    // fetch("https://tasty-crab-hosiery.cyclic.app/api/admin/members/21-22")
    fetch("21-22"); // for local testing, use the default session
    console.log(data);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setDataReserved(data);
    if (dataReserved.length > 0) {
      setData(dataReserved);
    }
    const list1 = data.filter((element) =>
      element.name.toLowerCase().includes(searchText.toLowerCase())
    );
    const list2 = data.filter((element) =>
      element.role.toLowerCase().includes(searchText.toLowerCase())
    );
    const list4 = data.filter((element) =>
      element.year.toLowerCase().includes(searchText.toLowerCase())
    );
    const list_final = list1.concat(list2, list4);
    console.log(list_final);
    if (list_final.length > 0) {
      setData(list_final);
    } else {
      toast.error("no such member found");
    }
    if (searchText === "") {
      setData(dataReserved);
    }
  };

  const handleSelect = (e) => {
    const session = e.target.value;
    fetch(session);
  };
  return (
    <div>
      <div className="headBar">
        <button className="btn" onClick={() => setAddMember(!addMember)}>
          Add New Members
        </button>
        <div className="searchbar">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="press enter to search"
              title="search by name, role, year"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </form>
        </div>
        <select
          name="sessionSelect"
          id="sessionSelect"
          className="btn"
          onChange={handleSelect}
          title="select session"
        >
          <option value="22-23">22-23</option>
          <option value="21-22" selected>
            21-22
          </option>
          <option value="20-21">20-21</option>
          <option value="19-20">19-20</option>
          <option value="18-19">18-19</option>
        </select>
      </div>
      {loading ? <Loader /> : <MemberGrid data={data} />}
      {addMember && (
        <MemberCreate addMember={addMember} setAddMember={setAddMember} />
      )}
    </div>
  );
};

export default MemberPage;
