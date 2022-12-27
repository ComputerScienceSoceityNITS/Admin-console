import React, { useState } from "react";
import CreateEvents from "../services/Events/CreateEvents";
import axios from "axios";

const EventCreate = ({ addEvent, setAddEvent }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState();
  const [formLink, setFormLink] = useState("");
  const [startTime, setStartTime] = useState("");
  const [startDate, setStartDate] = useState();
  //const [endDate, setEndDate] = useState(); //default:Date.now

  function handleSubmit(e) {
    const sendForm = new FormData();
    sendForm.set("name", name);
    sendForm.set("description", description);
    sendForm.set("images", images);
    sendForm.set("formLink", formLink);
    sendForm.set("startTime", startTime);
    sendForm.set("startDate", startDate);

    const events = CreateEvents(sendForm);
  }

  return (
    <div className="createPage">
      <p className="btn close" onClick={() => setAddEvent(!addEvent)}>
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
      <label htmlFor="description">Description</label>
      <textarea
        rows="8" 
        cols="110"
        name="description"
        id="description"
        accept="image"
        onChange={(e) => setDescription(e.target.value)}
      >{description}</textarea>
      <label htmlFor="images">Images</label>
      <input
        type="file"
        name="image"
        id="image"
        // value={image}
        title="Uploaded Image"
        onChange={(e) => {
          const reader = new FileReader();
          reader.readAsDataURL(e.target.files[0]);
          console.log({ reader });
          reader.addEventListener("load", (e) => {
            const image = document.querySelector(".imageUpload");
            image.attributes.src.value = e.target.result;
          });
          setImages(e.target.files[0]);
        }}
      />
      <label htmlFor="formLink">Form Link</label>
      <input
        type="text"
        name="formLink"
        id="formLink"
        value={formLink}
        onChange={(e) => setFormLink(e.target.value)}
      />
      <label htmlFor="startTime">Start Time</label>
      <input
        type="text"
        name="startTime"
        id="startTime"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />
      <label htmlFor="startDate">Year</label>
      <input
        type="date"
        name="startDate"
        id="startDate"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      
      <img className="imageUploaded" src="" alt="" />
      <button className="btn" onClick={handleSubmit}>
        Create
      </button>
    </div>
  );
};

export default EventCreate;
