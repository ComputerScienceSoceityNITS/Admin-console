import React, { useState } from "react";
import axios from "axios";
import EditEvents from "../services/Events/EditEvents";
import { useEffect } from "react";

const EventUpdate = ({ id,updateEvent, setupdateEvent,datasent }) => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [formLink, setFormLink] = useState();
  const [startTime, setStartTime] = useState();
  const [startDate, setStartDate] = useState();

  useEffect(()=>{
    setName(datasent.name);
    setDescription(datasent.description);
    setFormLink(datasent.formLink);
    setStartTime(datasent.startTime);
    setStartDate(datasent.startDate);
  },[datasent])

  const handleSubmit = ()=> {

    const sendForm = new FormData()
    sendForm.set("name",name);
    if (image){
      console.log(image);
      sendForm.set("images",image);
    }
    sendForm.set("description",description);
    sendForm.set("formLink",formLink);
    sendForm.set("startTime",startTime);
    sendForm.set("startDate",startDate);

    const events = EditEvents(sendForm, id )

  }


  return (
    <div className="createPage">
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
      <label htmlFor="description">Description</label>
      <textarea
        rows="4" 
        cols="50"
        name="description"
        id="description"
        accept="image"
        onChange={(e) => setDescription(e.target.value)}
      >{description}</textarea>

      <label htmlFor="image">Images</label>
      <input
        type="file"
        name="image"
        id="image"
        // value={image}
        onChange={(e) => setImage(e.target.files[0])}
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
      <button className="btn" onClick={()=>{handleSubmit()}}>
        Update
      </button>
    </div>
  );
};

export default EventUpdate;

