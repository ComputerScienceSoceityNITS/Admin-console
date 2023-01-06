import MemberUpdate from "./MemberUpdate";
import React, { useState } from "react";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai";
import DeleteMembers from "../services/Members/DeleteMembers";

const MemberGrid = ({ data, mode, reloadReq, setReloadReq }) => {
  data.sort((a, b) => b.year - a.year);
  return (
    <div className={mode ? "table bright" : "table dark"}>
      {data
        ? data.map((member) => (
            <RowElement
              data={member}
              mode={mode}
              reloadReq={reloadReq}
              setReloadReq={setReloadReq}
            />
          ))
        : ""}
    </div>
  );
};

const RowElement = ({ data, mode, reloadReq, setReloadReq }) => {
  const [updateMember, setupdateMember] = useState(false);
  const [clickedRow, setClickedRow] = useState(false);

  const handleDelete = (id) => {
    DeleteMembers(id, reloadReq, setReloadReq);
  };
  const handleUpdateClick = (e) => {
    setupdateMember(!updateMember);
    if (e && e.stopPropagation) {
      e.stopPropagation(); //for w3c browsers
      e.cancelBubble = true; //for microsoft browsers
    }
  };

  return (
    <div key={data.id}>
      <div
        className={clickedRow ? "row expand" : "row shrink"}
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
              <AiFillInstagram className="socialIcons" />
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
              <AiFillLinkedin className="socialIcons" />
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
              <AiFillGithub className="socialIcons" />
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
              <AiFillFacebook className="socialIcons" />
            </a>
          ) : (
            ""
          )}
        </div>
        <div>
          <button className="btn" onClick={handleUpdateClick}>
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
          mode={mode}
          reloadReq={reloadReq}
          setReloadReq={setReloadReq}
        />
      )}
    </div>
  );
};

export default MemberGrid;
