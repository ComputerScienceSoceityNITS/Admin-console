import React, { useState } from "react";
import Loader from "../components/loader";
import CreateEvents from "../services/Events/CreateEvents";
const EnigmaCreate = ({ addEvent, setAddEvent, reloadReq, setReloadReq }) => {
  const [cfContestLink, setCfContestLink] = useState();
  const [startDate, setStartDate] = useState();
  const [startTime, setStartTime] = useState();
  const [dataTransfer, setDataTransfer] = useState(false);

  function handleSubmit(e) {
    setDataTransfer(true);
    const sendForm = new FormData();
    sendForm.set("cfContestLink", cfContestLink);
    sendForm.set("startDate", startDate);
    sendForm.set("startTime", startTime);
    const events = CreateEvents(
      sendForm,
      setDataTransfer,
      reloadReq,
      setReloadReq,
      "enigma"
    ); // In enigma create based on this file
  }

  return (
    <div className="createPage">
      {dataTransfer && (
        <div className="dataTransfer">
          <Loader />
        </div>
      )}
      <p className="btn close" onClick={() => setAddEvent(!addEvent)}>
        X
      </p>
      <label htmlFor="name">CF Contest Link</label>
      <input
        type="text"
        name="name"
        id="name"
        value={cfContestLink}
        accept="image"
        onChange={(e) => setCfContestLink(e.target.value)}
      />

      <fieldset>
        <legend>Event Date-Time</legend>

        <div>
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="startTime">Contest Start Time</label>
          <input
            type="time"
            name="startTime"
            id="startTime"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
      </fieldset>

      <button className="btn" onClick={handleSubmit}>
        Create
      </button>
    </div>
  );
};

export default EnigmaCreate;
