import React, { useState, useEffect } from "react";
import "../styles/EventPage.css";
// import EventGrid from "../components/EventGrid";
// import EventCreate from "../components/EventCreate";
import Loader from "../components/loader";
import GetEvents from "../services/Events/GetEvents";
import "toastify-js/src/toastify.css";
import { toast } from "react-toastify";

import AbacusGrid from "../components/AbacusGrid";
import AbacusCreate from "../components/AbacusCreate";
import EnigmaGrid from "../components/EnigmaGrid";
import EnigmaCreate from "../components/EnigmaCreate";

const EventPage = ({ mode, event, theTwoEvent }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [addEvent, setAddEvent] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [dataReserved, setDataReserved] = useState([]);
  const [reloadReq, setReloadReq] = useState(false);

  const fetch = async () => {
    setLoading(true);
    const events = await GetEvents({ event });
    setData(events);
    console.log(events);
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
    // console.log(data);
    const list1 = data.filter(
      (element) =>
        element.name &&
        element.name.toLowerCase().includes(searchText.toLowerCase())
    );
    const list2 = data.filter((element) =>
      element.startTime.includes(searchText.toLowerCase())
    );
    const list4 = data.filter((element) =>
      element.startDate.includes(searchText.toLowerCase())
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
          Add {theTwoEvent} Event
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
        // If event === 'abacus' then <AbacusGrid/>
        // if event === 'enigma' then <EnigmaGrid/>
        (event === "abacus" && (
          <AbacusGrid
            data={data}
            mode={mode}
            reloadReq={reloadReq}
            setReloadReq={setReloadReq}
          />
        )) ||
        (event === "enigma" && (
          <EnigmaGrid
            data={data}
            mode={mode}
            reloadReq={reloadReq}
            setReloadReq={setReloadReq}
          />
        ))
        //EventGrid , EventCreate and EventUpdate will be diff for Abacus and Enigma based on the present event components.
      )}
      {
        addEvent &&
          ((event === "abacus" && (
            <AbacusCreate
              addEvent={addEvent}
              setAddEvent={setAddEvent}
              mode={mode}
              reloadReq={reloadReq}
              setReloadReq={setReloadReq}
            />
          )) ||
            (event === "enigma" && (
              <EnigmaCreate
                addEvent={addEvent}
                setAddEvent={setAddEvent}
                mode={mode}
                reloadReq={reloadReq}
                setReloadReq={setReloadReq}
              />
            )))
        // <EventCreate
        //   addEvent={addEvent}
        //   setAddEvent={setAddEvent}
        //   mode={mode}
        //   reloadReq={reloadReq}
        //   setReloadReq={setReloadReq}
        // />
      }
    </div>
  );
};

export default EventPage;
