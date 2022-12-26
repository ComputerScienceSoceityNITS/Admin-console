import React, { useState, useEffect } from "react";
import "../styles/EventPage.css";
import  GetEvents from "../services/GetEvents";
import "toastify-js/src/toastify.css";
import DeleteEvents from "../services/DeleteEvents";






const EventPage = () => {
  const [events, setEvents] = useState([]);

const fetch = async ()=>{
  const events = await GetEvents()
  setEvents(events)
}
  useEffect(() => {fetch()}, []);

  return <><div className="EventPage">EventPage </div>
      {/* {events.map((e)=>{
        
       console.log(e);
      return (<div>
          hello2
          name:{e.name}
          
      </div>)
       })} */
       events.map(
        (e,i) =>
         {
        return (
      
          <div className=''>
            <div>{e.name}</div>
            {/* <div>{e.date}</div> */}
            { <button onClick={()=>{
              DeleteEvents(e._id)
            }}>Delete</button> }
          </div>
        )
         }
      )
       
       
       
       }
   
  </>;
};

export default EventPage;
