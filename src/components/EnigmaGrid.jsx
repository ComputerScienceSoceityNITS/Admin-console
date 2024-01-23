import EnigmaUpdate from "./EnigmaUpdate";
import React, { useState } from "react";
import DeleteEvents from "../services/Events/DeleteEvents";
import Participants from "../components/Participants";

const EnigmaGrid = ({ data, mode, reloadReq, setReloadReq }) => {
  return (
    <div className={mode ? "table bright" : "table dark"}>
      {data
        ? data.map((event) => (
            <RowElement
              data={event}
              mode={mode}
              reloadReq={reloadReq}
              setReloadReq={setReloadReq}
            />
          ))
        : ""}
    </div>
  );
};
const RowElement = ({ data, mode, reloadReq, setReloadReq }) => {
  const [updateEvent, setupdateEvent] = useState(false);
  const [clickedRow, setClickedRow] = useState(false);
  const [participants, setparticipants] = useState(false);
  
  const handleDelete = (id) => {
    DeleteEvents(id, reloadReq, setReloadReq, "enigma");
  };
  const handleUpdateClick = (e) => {
    setupdateEvent(!updateEvent);
    if (e && e.stopPropagation) {
      e.stopPropagation(); //for w3c browsers
      e.cancelBubble = true; //for microsoft browsers
    }
  };
  const handleUpdateClick1 = (e) => {
    setparticipants(!participants);
    if (e && e.stopPropagation) {
      e.stopPropagation(); //for w3c browsers
      e.cancelBubble = true; //for microsoft browsers
    }
  };

  return (
    <div key={data.id}>
      <div
        className={clickedRow ? "e_row expand" : "e_row shrink"}
        key={data.id}
        onClick={() => setClickedRow(!clickedRow)}
        draggable
        title="Expandable on click"
      >
        <p title="cfContestLink">
          <a
            href={data.cfContestLink}
            target="_blank"
            title="form"
            rel="noopener noreferrer"
          >
            CF Contest Link
          </a>
        </p>
        <p title="start_Date">{data.startDate.split("T")[0]}</p>
        <p title="startTime">
          Start Time : <b id="startTime">{data.startTime}</b>
        </p>
        <p
          title="Participants"
          onClick={handleUpdateClick1}
          className="all_teams"
        >
          <b id="Participants">
            PARTICIPANTS: <b id="Participant">{data.participants.length}</b>
          </b>
        </p>

        <div>
          <button className="btn" onClick={handleUpdateClick}>
            Edit
          </button>
          <button className="btn" onClick={() => handleDelete(data._id)}>
            Delete
          </button>
        </div>
      </div>
      {updateEvent && (
        <EnigmaUpdate
          id={data._id}
          updateEvent={updateEvent}
          setupdateEvent={setupdateEvent}
          datasent={data}
          mode={mode}
          reloadReq={reloadReq}
          setReloadReq={setReloadReq}
        />
      )}
      {participants && (
        <Participants
          participants={participants}
          setparticipants={setparticipants}
          datasent={data.teams}
        />
      )}
    </div>
  );
};

export default EnigmaGrid;
