import AbacusUpdate from "./AbacusUpdate";
import React, { useState } from "react";
import DeleteEvents from "../services/Events/DeleteEvents";

const AbacusGrid = ({ data, mode, reloadReq, setReloadReq }) => {
  return (
    <div className={mode ? "table bright" : "table dark"}>
      {data.length > 0 ? data.map((event) => <RowElement data={event} mode={mode} reloadReq={reloadReq} setReloadReq={setReloadReq} />) : ''}
    </div>
  );
};

const RowElement = ({ data, mode, reloadReq, setReloadReq }) => {
  const [updateEvent, setupdateEvent] = useState(false);
  const [clickedRow, setClickedRow] = useState(false);

  const handleDelete = (id) => {
    DeleteEvents(id, reloadReq, setReloadReq, 'abacus');
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
        <h3 title="Name">{data.name}</h3>
        {
          data.length > 0 && data.images.map((img) => {
            return <a href={img.url} target="_blank" rel="noopener noreferrer"><img src={img.url} alt="img" title="images" className="eventImages" /></a>
          })
        }
        <p title="Group Link"><a href={data.groupLink} target="_blank" title="form" rel="noopener noreferrer">Group Link</a></p>
        <p title="Event Type">Event Type : <b id="eventType">{data.eventType}</b></p>
        <p title="startTime">Start Time : <b id="startTime">{data.startTime}</b></p>
        <p title="start_end_Date">{data.startDate.split("T")[0]} to {data.endDate.split("T")[0]}</p>
        <p title="Min Team Size">Min Team Size : <b id="minTeamSize">{data.minTeamSize}</b></p>
        <p title="Max Team Size">Max Team Size : <b id="maxTeamSize">{data.maxTeamSize}</b></p>
        <p title="description" id="desc">{data.description}</p>
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
        <AbacusUpdate
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

export default AbacusGrid;
