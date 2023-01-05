import React, { useState, useEffect } from "react";
import "../styles/MemberPage.css";
import MemberGrid from "../components/memberGrid";
import MemberCreate from "../components/MemberCreate";
import Loader from "../components/loader";
import GetMembers from "../services/Members/GetMembers";
import "toastify-js/src/toastify.css";
import { toast } from "react-toastify";

const MemberPage = ({ mode }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [addMember, setAddMember] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [dataReserved, setDataReserved] = useState([]);
  const [seSSion, setSeSSion] = useState("21-22");
  const [reloadReq, setReloadReq] = useState(false);

  const fetch = async (session) => {
    setLoading(true);
    const members = await GetMembers(session);
    setData(members);
    setLoading(false);
  };

  useEffect(() => {
    fetch(seSSion);
  }, [reloadReq]);

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
    setSeSSion(session);
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
        </select>
        <div
          className="btn"
          onClick={() => {
            fetch(seSSion);
          }}
        >
          Reload
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <MemberGrid
          data={data}
          mode={mode}
          reloadReq={reloadReq}
          setReloadReq={setReloadReq}
        />
      )}
      {addMember && (
        <MemberCreate
          addMember={addMember}
          setAddMember={setAddMember}
          mode={mode}
          reloadReq={reloadReq}
          setReloadReq={setReloadReq}
        />
      )}
    </div>
  );
};

export default MemberPage;
