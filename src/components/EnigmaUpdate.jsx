import React, { useState } from "react";
import { useEffect } from "react";
import Loader from "../components/loader";
import EditEvents from "../services/Events/EditEvents";

const EnigmaUpdate = ({
  id,
  updateEvent,
  setupdateEvent,
  datasent,
  reloadReq,
  setReloadReq,
}) => {
  const [cfContestLink, setCfContestLink] = useState("");
  const [startDate, setStartDate] = useState();
  const [startTime, setStartTime] = useState();
  const [dataTransfer, setDataTransfer] = useState(false);

  useEffect(() => {
    setCfContestLink(datasent.cfContestLink);
    setStartDate(datasent.startDate.split("T")[0]);
    setStartTime(datasent.startTime);
  }, [datasent]);

  const handleSubmit = () => {
    
    const sendForm = new FormData();
    sendForm.set("cfContestLink", cfContestLink);
    sendForm.set("startDate", startDate);
    sendForm.set("startTime", startTime);

    setDataTransfer(true);
    const events = EditEvents(
      sendForm,
      id,
      setDataTransfer,
      reloadReq,
      setReloadReq,
      "enigma"
    );
  };

  return (
    <div className="createPage">
      {dataTransfer && (
        <div className="dataTransfer">
          <Loader />
        </div>
      )}
      <p className="btn close" onClick={() => setupdateEvent(!updateEvent)}>
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

export default EnigmaUpdate;
