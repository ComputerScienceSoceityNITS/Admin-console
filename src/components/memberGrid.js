import React from "react";
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
      {data.length > 0 && data.map((member) => <RowElement data={member} />)}
    </div>
  );
};

const RowElement = ({ data }) => {
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
    <div className="row" key={data._id}>
      <img src={data.avatar.url} alt="img" />
      <h3>{data.name}</h3>
      <p>{data.role}</p>
      <p>{data.session}</p>
      <p>{data.year}</p>
      <div className="socials">
        <a href={data.socialMedia.instagram}>
          <AiFillInstagram />
        </a>
        <a href={data.socialMedia.linkedin}>
          <AiFillLinkedin />
        </a>
        <a href={data.socialMedia.github}>
          <AiFillGithub />
        </a>
        <a href={data.socialMedia.facebook}>
          <AiFillFacebook />
        </a>
      </div>
      <button className="btn">Edit</button>
      <button className="btn" onClick={() => handleDelete(data._id)}>
        Delete
      </button>
    </div>
  );
};

export default MemberGrid;
