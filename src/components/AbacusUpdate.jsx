import React, { useState } from "react";
import EditEvents from "../services/Events/EditEvents";
import { useEffect } from "react";
import Loader from "../components/loader";

const AbacusUpdate = ({
  id,
  updateEvent,
  setupdateEvent,
  datasent,
  reloadReq,
  setReloadReq,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState(); //default:Date.now
  const [images, setImages] = useState();
  const [groupLink, setGroupLink] = useState();
  const [eventType, setEventType] = useState();
  const [minTeamSize, setMinTeamSize] = useState();
  const [maxTeamSize, setMaxTeamSize] = useState();
  const [dataTransfer, setDataTransfer] = useState(false);

  useEffect(() => {
    setName(datasent.name);
    setDescription(datasent.description);
    setImages(datasent.images);
    setStartTime(datasent.startTime);
    setStartDate(datasent.startDate.split("T")[0]);
    setEndDate(datasent.endDate.split("T")[0]);
    setGroupLink(datasent.groupLink);
    setEventType(datasent.eventType);
    setMinTeamSize(datasent.minTeamSize);
    setMaxTeamSize(datasent.maxTeamSize);
    const imageBody = document.querySelector(".imageUploaded");
  }, [datasent]);

  const handleSubmit = () => {
    const sendForm = new FormData();
    sendForm.set("name", name);
    if (images) {
      sendForm.set("coverPic", images);
    }
    sendForm.set("description", description);
    sendForm.set("startTime", startTime);
    sendForm.set("startDate", startDate);
    sendForm.set("endDate", endDate);
    sendForm.set("groupLink", groupLink);
    sendForm.set("eventType", eventType);
    sendForm.set("minTeamSize", minTeamSize);
    sendForm.set("maxTeamSize", maxTeamSize);
    setDataTransfer(true);
    const events = EditEvents(
      sendForm,
      id,
      setDataTransfer,
      reloadReq,
      setReloadReq,
      "abacus"
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
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        accept="image"
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="images">Images</label>
      <input
        type="file"
        name="image"
        id="image"
        multiple
        title="Uploaded Image"
        onChange={(e) => {
          const files = Array.from(e.target.files);
          const imageBody = document.querySelector(".imageUploaded");
          while (imageBody.firstChild) {
            imageBody.removeChild(imageBody.lastChild);
          }
          setImages([]);
          files.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
              if (reader.readyState === 2) {
                setImages((old) => [...old, reader.result]);
                const links = document.createElement("a");
                links.href = reader.result;
                links.target = "_blank";
                const image = document.createElement("img");
                image.src = reader.result;
                links.appendChild(image);
                imageBody.appendChild(links);
              }
            };
            reader.readAsDataURL(file);
          });
        }}
      />
      <label htmlFor="imgupload">Image to be Uploaded</label>
      <div className="imageUploaded" id="imgupload"></div>
      <label htmlFor="groupLink">Group Link</label>
      <input
        type="text"
        name="groupLink"
        id="groupLink"
        value={groupLink}
        onChange={(e) => setGroupLink(e.target.value)}
      />
      <label htmlFor="eventType">Event Type</label>
      <input
        type="text"
        name="eventType"
        id="eventType"
        value={eventType}
        onChange={(e) => setEventType(e.target.value)}
      />
      <label htmlFor="minTeamSize">Minimum Team Size</label>
      <input
        type="text"
        name="minTeamSize"
        id="minTeamSize"
        value={minTeamSize}
        onChange={(e) => setMinTeamSize(e.target.value)}
      />
      <label htmlFor="minTeamSize">Maximum Team Size</label>
      <input
        type="text"
        name="maxTeamSize"
        id="maxTeamSize"
        value={maxTeamSize}
        onChange={(e) => setMaxTeamSize(e.target.value)}
      />
      <fieldset>
        <legend>Event Date-Time</legend>
        <div>
          <label htmlFor="startTime">Start Time</label>
          <input
            type="time"
            name="startTime"
            id="startTime"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
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
          <label htmlFor="startDate">End Date</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </fieldset>
      <label htmlFor="description">Description</label>
      <textarea
        rows="8"
        cols="110"
        name="description"
        id="description"
        accept="image"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      >
        {description}
      </textarea>
      <button
        className="btn"
        onClick={() => {
          handleSubmit();
        }}
      >
        Update
      </button>
    </div>
  );
};

export default AbacusUpdate;
