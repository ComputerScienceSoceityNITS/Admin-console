import React, { useState, useEffect } from "react";
import "../styles/MemberPage.css";
import { MemberGrid } from "../components/MemberGrid";

const MemberPage = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://css-website.herokuapp.com/api/admin/members/21-22")
      .then((req) => req.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);
  return <MemberGrid data={data} />;
};

export default MemberPage;
