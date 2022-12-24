import React, { useState, useEffect } from "react";
import "../styles/MemberPage.css";
import MemberGrid from "../components/memberGrid";
import MemberCreate from "../components/MemberCreate";
import Loader from "../components/loader";
import GetMembers from "../services/GetMembers";
import { toast } from "react-toastify";

const MemberPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [addMember, setAddMember] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [dataReserved, setDataReserved] = useState([]);

  const fetch = async () => {
    const members = await GetMembers();
    setData(members);
    setLoading(false);
    console.log(members);
  };

  useEffect(() => {
    // fetch("https://tasty-crab-hosiery.cyclic.app/api/admin/members/21-22")
    fetch();
    console.log(data);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setDataReserved(data);
    if (dataReserved.length > 0) {
      setData(dataReserved);
    }
    const list1 = data.filter((element) => element.name.includes(searchText));
    const list2 = data.filter((element) => element.role.includes(searchText));
    const list4 = data.filter((element) => element.year.includes(searchText));
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
      </div>
      {loading ? <Loader /> : <MemberGrid data={data} />}
      {addMember && (
        <MemberCreate addMember={addMember} setAddMember={setAddMember} />
      )}
    </div>
  );
};

export default MemberPage;
