import React from "react";

const MemberGrid = ({ data }) => {
  return (
    <div className="table">
      {data.length > 0 && data.map((member) => <RowElement data={member} />)}
    </div>
  );
};

const RowElement = ({ data }) => {
  return <div className="row">
    <img src={data.} alt="img" />
  </div>;
};

export default MemberGrid;
