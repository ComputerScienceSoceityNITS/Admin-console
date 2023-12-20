import React, { useState } from "react";
const Participants = ({ participants, setparticipants, datasent }) => {
  console.log(datasent);
  return (
    <div className="participants_page">
      <p className="btn close" onClick={() => setparticipants(!participants)}>
        X
      </p>

      {datasent
        ? datasent.map((teams) => <RowParticipants data={teams} />)
        : ""}
    </div>
  );
};
const RowParticipants = ({ data }) => {
  const [clickedRow, setClickedRow] = useState(false);

  return (
    <div key={data.id}>
      <div
        className={clickedRow ? "p_row expand_p" : "p_row shrink_p"}
        key={data.id}
        onClick={() => setClickedRow(!clickedRow)}
        draggable
        title="Expandable on click"
      >
        <h3 title="Name">{data.name}</h3>
        {data.teamLeader ? (
          <>
            <h5 title="teamLeader">Team Leader</h5>
            <p title="teamLeader_name">Name : {data.teamLeader.name}</p>
            <p title="teamLeader_email">Email : {data.teamLeader.email}</p>
            <p title="teamLeader_schid">
              Scholar Id : {data.teamLeader.scholarID}
            </p>
          </>
        ) : (
          ""
        )}

        <h5 title="teamLeader">Members</h5>
        {data.members.map((members) => (
          <div className="mems">
            <p title="member_name">Name : {members.name}</p>
            <p title="member_email">Email : {members.email}</p>
            <p title="member_schid">Scholar Id : {members.scholarID}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Participants;
