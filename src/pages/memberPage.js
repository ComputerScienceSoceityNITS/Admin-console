import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/MemberPage.css";
import MemberGrid from "../components/MemberGrid";
import MemberCreate from "../components/MemberCreate";

const MemberPage = () => {
  const [data, setData] = useState([]);
  const [addMember, setAddMember] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [dataReserved, setDataReserved] = useState([]);
  useEffect(() => {
    // fetch("https://tasty-crab-hosiery.cyclic.app/api/admin/members/21-22")
    async function fetchAllEvents() {
      try {
        const res = await axios.get(
          "https://tasty-crab-hosiery.cyclic.app/api/admin/members/21-22"
        );
        console.log(res);
        setData(res.data.members);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAllEvents();
  }, []);
  const handleSearch = () => {
    setDataReserved(data);
    const list1 = data.filter((element) => element.name.includes(searchText));
    setData(list1);
    console.log(list1);
    if (searchText === "") {
      setData(dataReserved);
    }
  };
  return (
    <div>
      <div className="headBar">
        <button className="btn" onClick={() => setAddMember(!addMember)}>
          Add New Members
        </button>
        <div className="searchbar">
          <input
            type="text"
            placeholder="search by names"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <MemberGrid data={data} />
      {addMember && (
        <MemberCreate addMember={addMember} setAddMember={setAddMember} />
      )}
    </div>
  );
};

export default MemberPage;
