
import React, { useState } from "react";
import axios from "axios";

const MemberUpdate = ({ id,updateMember, setupdateMember }) => {
  console.log(`${id}`);
    let BASE_URL = `http://localhost:5000/api/admin/member/${id}`;
    let response;
    let data;
    const accessMember = async() => {
         response = await fetch(BASE_URL,{method:"GET"});
         data = await response.json()
         console.log(data)
    }


    accessMember();


   let [name, setName] = useState(`${data.name}`);
  let [image, setImage] = useState();
  let [role, setRole] = useState(`${data.role}`);
  let [session, setSession] = useState(`${data.session}`);
  let [year, setYear] = useState(`${data.year}`);
  let [social, setSocial] = useState({"instagram":`${data.socialMedia.instagram}`,"linkedin":`${data.socialMedia.linkedin}`,"github":`${data.socialMedia.github}`,
  "facebook":`${data.socialMedia.facebook}`});

  function handleSubmit(e) {
    e.preventDefault();
    const sendData = JSON.stringify({
      name,
      image,
      role,
      session,
      year,
      social,
    });
    console.log(sendData);
    async function addNew() {
      try {
        const res = await axios.post(
          `http://localhost:5000/api/admin/member/${id}`,
          sendData
        );
        console.log(res.data.id);
      } catch (err) {
        console.log(err);
      }
    }
    addNew();
  }
  return (
    <div className="createPage">
      <p className="btn close" onClick={() => setupdateMember(!updateMember)}>
        Cancel
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
      <label htmlFor="image">Avatar</label>
      <input
        type="file"
        name="image"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <label htmlFor="role">Role</label>
      <input
        type="text"
        name="role"
        id="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <label htmlFor="session">Session</label>
      <input
        type="text"
        name="session"
        id="session"
        value={session}
        onChange={(e) => setSession(e.target.value)}
      />
      <label htmlFor="year">Year</label>
      <input
        type="number"
        name="year"
        id="year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <fieldset>
        <legend>Social Media</legend>
        <div>
          <label htmlFor="instagram">Instagram</label>
          <input
            type="url"
            name="instagram"
            id="instagram"
            value={social.instagram}
            onChange={(e) =>
              setSocial({ ...social, instagram: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="linkedin">Linkedin</label>
          <input
            type="url"
            name="linkedin"
            id="linkedin"
            value={social.linkedin}
            onChange={(e) => setSocial({ ...social, linkedin: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="github">Github</label>
          <input
            type="url"
            name="github"
            id="github"
            value={social.github}
            onChange={(e) => setSocial({ ...social, github: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="facebook">Facebook</label>
          <input
            type="url"
            name="facebook"
            id="facebook"
            value={social.facebook}
            onChange={(e) => setSocial({ ...social, facebook: e.target.value })}
          />
        </div>
      </fieldset>
      <button className="btn" onClick={handleSubmit}>
        Update
      </button>
        </div>
        );
};

export default MemberUpdate;

