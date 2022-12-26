import MemberUpdate from "./MemberUpdate";
import React, { useState } from "react";
import axios from "axios";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai";

const MemberGrid = ({ data }) => {
  return (
    <div className="table">
      {data? data.map((member) => <RowElement data={member} />):''}
    </div>
  );
};

const RowElement = ({ data }) => {
  const [updateMember, setupdateMember] = useState(false);
  
  const [clickedRow, setClickedRow] = useState(false);
  const handleDelete = (id) => {
    console.log(id);
    async function del() {
      try {
        const res = await axios.delete(
          `http://localhost:5000/api/admin/member/${id}`
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
    del();
  };

  return (
    <div>
      <div
        className={clickedRow ? "row expand" : "row"}
        key={data.name}
        onClick={() => setClickedRow(!clickedRow)}
        draggable
        title="Expandable on click"
      >
        <img src={data.avatar.url} alt="img" title="Avatar" />
        <h3 title="Name">{data.name}</h3>
        <p title="Role">{data.role}</p>
        <p title="Session">{data.session}</p>
        <p title="Year">{data.year}</p>
        <div className="socials" title="Socials">
          {data.socialMedia ? (
            <a href={data.socialMedia.instagram}>
              <AiFillInstagram />
            </a>
          ) : (
            ""
          )}
          {data.socialMedia ? (
            <a href={data.socialMedia.linkedin}>
              <AiFillLinkedin />
            </a>
          ) : (
            ""
          )}
          {data.socialMedia ? (
            <a href={data.socialMedia.github}>
              <AiFillGithub />
            </a>
          ) : (
            ""
          )}
          {data.socialMedia ? (
            <a href={data.socialMedia.facebook}>
              <AiFillFacebook />
            </a>
          ) : (
            ""
          )}
        </div>
        <div>
          <button
            className="btn"
            onClick={() => setupdateMember(!updateMember)}
          >
            Edit
          </button>
          <button className="btn" onClick={() => handleDelete(data._id)}>
            Delete
          </button>
        </div>
      </div>
      {updateMember && (
        <MemberUpdate
          id={data._id}
          updateMember={updateMember}
          setupdateMember={setupdateMember}
          datasent={data}
        />
      )}
    </div>
  );
};

export default MemberGrid;
