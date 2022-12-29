import React, { useState, useEffect } from "react";
import "../styles/EventPage.css";
import EventGrid from "../components/EventGrid";
import EventCreate from "../components/EventCreate";

import Loader from "../components/loader";
import GetEvents from "../services/Events/GetEvents";
import "toastify-js/src/toastify.css"
import DeleteEvents from "../services/Events/DeleteEvents";
import { toast } from "react-toastify";

const EventPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [addEvent, setAddEvent] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [dataReserved, setDataReserved] = useState([]);


  const [events, setEvents] = useState([]);

  const fetch = async () => {
    setLoading(true);
    const events = await GetEvents();
    setData(events);
    setLoading(false);
    console.log(events);
  };

  useEffect(() => {
    fetch();
    console.log(data);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setDataReserved(data);
    if (dataReserved.length > 0) {
      setData(dataReserved);
    }
    const list1 = data.filter((element) => element.name.includes(searchText));
    const list2 = data.filter((element) => element.startTime.includes(searchText));
    const list4 = data.filter((element) => element.startDate.includes(searchText));
    const list_final = list1.concat(list2, list4);
    console.log(list_final);
    if (list_final.length > 0) {
      setData(list_final);
    } else {
      toast.error("no such event found");
    }
    if (searchText === "") {
      setData(dataReserved);
    }
  };
  return (
    <div>
      <div className="headBar">
        <button className="btn" onClick={() => setAddEvent(!addEvent)}>
          Add New Events
        </button>
        <div className="searchbar">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="press enter to search"
              title="search by name,start time,start date"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </form>
        </div>
        </div>
      {loading ? <Loader /> : <EventGrid data={data} />}
      {addEvent && (
        <EventCreate addEvent={addEvent} setAddEvent={setAddEvent} />
      )}
    </div>
  )
};

export default EventPage;