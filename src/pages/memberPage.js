import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/MemberPage.css";
import MemberGrid from "../components/memberGrid";
import MemberCreate from "../components/MemberCreate";
import GetMembers from "../services/GetMembers";
import "toastify-js/src/toastify.css"
import DeleteMembers from "../services/DeleteMembers";

const MemberPage = () => {
  const [data, setData] = useState([]);
  const [addMember, setAddMember] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [dataReserved, setDataReserved] = useState([]);
  const [members, setMembers] = useState([]);
  
  const fetch = async ()=>{
    const members = await GetMembers()
    setData(members)
  }
 

  useEffect(() => {
    // fetch("https://tasty-crab-hosiery.cyclic.app/api/admin/members/21-22")
    fetch()
    console.log(data);
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
      {data?
        <MemberGrid data={data} />
        :''
      }
      {addMember && (
        <MemberCreate  addMember={addMember} setAddMember={setAddMember} />
      )}
    </div>
    
  
    
    
  )
  

    
};

export default MemberPage;
