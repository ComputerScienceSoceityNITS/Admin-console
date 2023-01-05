import React, { useState, useEffect } from "react";
import "../styles/EventPage.css";
import EventGrid from "../components/EventGrid";
import EventCreate from "../components/EventCreate";
import Loader from "../components/loader";
import GetEvents from "../services/Events/GetEvents";
import "toastify-js/src/toastify.css";
import { toast } from "react-toastify";

const EventPage = ({ mode }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [addEvent, setAddEvent] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [dataReserved, setDataReserved] = useState([]);
  const [reloadReq, setReloadReq] = useState(false);

  const fetch = async () => {
    setLoading(true);
    const events = await GetEvents();
    setData(events);
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, [reloadReq]);

  const handleSearch = (e) => {
    e.preventDefault();
    setDataReserved(data);
    if (dataReserved.length > 0) {
      setData(dataReserved);
    }
    const list1 = data.filter((element) =>
      element.name.toLowerCase().includes(searchText.toLowerCase())
    );
    const list2 = data.filter((element) =>
      element.startTime.toLowerCase().includes(searchText.toLowerCase())
    );
    const list4 = data.filter((element) =>
      element.startDate.toLowerCase().includes(searchText.toLowerCase())
    );
    const list_final = list1.concat(list2, list4);
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
        <div
          className="btn"
          onClick={() => {
            fetch();
          }}
        >
          Reload
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <EventGrid
          data={data}
          mode={mode}
          reloadReq={reloadReq}
          setReloadReq={setReloadReq}
        />
      )}
      {addEvent && (
        <EventCreate
          addEvent={addEvent}
          setAddEvent={setAddEvent}
          mode={mode}
          reloadReq={reloadReq}
          setReloadReq={setReloadReq}
        />
      )}
    </div>
  );
};

export default EventPage;
