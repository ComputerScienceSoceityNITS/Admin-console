import MemberUpdate from "./MemberUpdate";
import React, { useState } from "react";
import axios from "axios";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai";
import DeleteMembers from "../services/Members/DeleteMembers";

const MemberGrid = ({ data }) => {
  data.sort((a, b) => b.year - a.year);
  return (
    <div className="table">
      {data ? data.map((member) => <RowElement data={member} />) : ""}
    </div>
  );
};

const RowElement = ({ data }) => {
  const [updateMember, setupdateMember] = useState(false);

  const [clickedRow, setClickedRow] = useState(false);
  const handleDelete = (id) => {
    console.log(id);
    // async function del() {
    //   try {
    //     const res = await axios.delete(
    //       `http://localhost:5000/api/admin/member/${id}`
    //     );
    //     console.log(res);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
    // del();
    DeleteMembers(id);
  };

  return (
    <div key={data.id}>
      <div
        className={clickedRow ? "row expand" : "row"}
        key={data.id}
        onClick={() => setClickedRow(!clickedRow)}
        draggable
        title="Expandable on click"
      >
        <a href={data.avatar.url} target="_blank" rel="noopener noreferrer">
          <img src={data.avatar.url} alt="img" title="Avatar" />
        </a>
        <h3 title="Name">{data.name}</h3>
        <p title="Role">{data.role}</p>
        <p title="Session">{data.session}</p>
        <p title="Year">{data.year}</p>
        <div className="socials" title="Socials">
          {data.socialMedia ? (
            <a
              href={data.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
          ) : (
            ""
          )}
          {data.socialMedia ? (
            <a
              href={data.socialMedia.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
          ) : (
            ""
          )}
          {data.socialMedia ? (
            <a
              href={data.socialMedia.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          ) : (
            ""
          )}
          {data.socialMedia ? (
            <a
              href={data.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
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
