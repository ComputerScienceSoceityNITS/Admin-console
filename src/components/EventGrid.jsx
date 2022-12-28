import EventUpdate from "./EventUpdate";
import React, { useState } from "react";
import axios from "axios";

import DeleteEvents from "../services/Events/DeleteEvents";

const EventGrid = ({ data }) => {

  return (
    <div className="table">
      {data? data.map((event) => <RowElement data={event} />):''}
    </div>
  );
};

const RowElement = ({ data }) => {
  const [updateEvent, setupdateEvent] = useState(false);

  const [clickedRow, setClickedRow] = useState(false);
  const handleDelete = (id) => {
    console.log(id);
    DeleteEvents(id);
  };

  return (
    <div key={data.id}>
      <div
        className={clickedRow ? "row expand" : "row"}
        key={data.id}
        onClick={() => setClickedRow(!clickedRow)}
        draggable
        title="Expandable on click"
      >
        <img src={data.images.url} alt="img" title="images" />
        <h3 title="Name">{data.name}</h3>
        <p title="description">{data.description}</p>
        <p title="formLink">Form Link:{data.formLink}</p>
        <p title="startTime">Start Time:{data.startTime}</p>
        <p title="start_end_Date">{data.startDate} to {data.endDate}</p>


        <div>
          <button
            className="btn"
            onClick={() => setupdateEvent(!updateEvent)}
          >
            Edit
          </button>
          <button className="btn" onClick={() => handleDelete(data._id)}>
            Delete
          </button>
        </div>
      </div>
      {updateEvent && (
        <EventUpdate
          id={data._id}
          updateEvent={updateEvent}
          setupdateEvent={setupdateEvent}
          datasent={data}
        />
      )}
    </div>
  );
};

export default EventGrid;
