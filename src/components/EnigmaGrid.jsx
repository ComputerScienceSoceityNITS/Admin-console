import EnigmaUpdate from "./EnigmaUpdate";
import React, { useState } from "react";
import DeleteEvents from "../services/Events/DeleteEvents";

const EnigmaGrid = ({ data, mode, reloadReq, setReloadReq }) => {
  return (
    <div className={mode ? "table bright" : "table dark"}>
      {data ? data.map((event) => <RowElement data={event} mode={mode} reloadReq={reloadReq} setReloadReq={setReloadReq} />) : ''}
    </div>
  );
};
const RowElement = ({ data, mode, reloadReq, setReloadReq }) => {
  const [updateEvent, setupdateEvent] = useState(false);
  const [clickedRow, setClickedRow] = useState(false);

  const handleDelete = (id) => {
    DeleteEvents(id, reloadReq, setReloadReq, 'enigma');
  };
  const handleUpdateClick = (e) => {
    setupdateEvent(!updateEvent);
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
        <p title="cfContestLink"><a href={data.cfContestLink} target="_blank" title="form" rel="noopener noreferrer">CF Contest Link</a></p>
        <p title="start_Date">{data.startDate.split("T")[0]}</p>
        <p title="startTime">Start Time : <b id="startTime">{data.startTime}</b></p>
        <p title="durationInHrs">Duration(In Hours) : <b id="durationInHrs">{data.durationInHrs}</b></p>
        {data.questionSetters.map((trav) => {
          return <>
            <ul>
              <li>{trav}</li>
            </ul>
          </>
        })}

        {data.questionTesters.map((trav) => {
          return <>
            <ul>
              <li>{trav}</li>
            </ul>
          </>
        })}



        <div>
          <button
            className="btn"
            onClick={handleUpdateClick}
          >
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
    </div>
  );
};

export default EnigmaGrid;
