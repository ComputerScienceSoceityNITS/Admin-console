import React, { useState } from "react";
import axios from "axios";
import EditMembers from "../services/Members/EditMembers";
import { useEffect } from "react";

const MemberUpdate = ({ id,updateMember, setupdateMember,datasent }) => {
  // console.log(`${i}`);    
  const [name, setName] = useState();
  // let [image, setImage] = useState(datasent.avatar.url);
  const [image, setImage] = useState();
  const [role, setRole] = useState();
  const [session, setSession] = useState();
  const [year, setYear] = useState();
  const [social, setSocial] = useState();

  useEffect(()=>{
    setName(datasent.name);
    setRole(datasent.role);
    setSession(datasent.session);
    setYear(datasent.year);
    setSocial(datasent.socialMedia?{"instagram":`${datasent.socialMedia.instagram}`,"linkedin":`${datasent.socialMedia.linkedin}`,"github":`${datasent.socialMedia.github}`,
    "facebook":`${datasent.socialMedia.facebook}`}:undefined);
  },[datasent])

  const handleSubmit = ()=> {

    const sendForm = new FormData()
    sendForm.set("name",name);
    if (image){
      console.log(image);
      sendForm.set("avatar",image);
    }
    sendForm.set("role",role);
    sendForm.set("session",session);
    sendForm.set("year",year);
    sendForm.set("social",social);

    const members = EditMembers(sendForm, id )

  }


  return (
    <div className="createPage">
      <p className="btn close" onClick={() => setupdateMember(!updateMember)}>
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
      <label htmlFor="image">Avatar</label>
      <input
        type="file"
        name="image"
        id="image"
        // value={image}
        onChange={(e) => setImage(e.target.files[0])}
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
            value={social?social.instagram:''}
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
            value={social?social.linkedin:''}
            onChange={(e) => setSocial({ ...social, linkedin: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="github">Github</label>
          <input
            type="url"
            name="github"
            id="github"
            value={social?social.github:''}
            onChange={(e) => setSocial({ ...social, github: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="facebook">Facebook</label>
          <input
            type="url"
            name="facebook"
            id="facebook"
            value={social?social.facebook:''}
            onChange={(e) => setSocial({ ...social, facebook: e.target.value })}
          />
        </div>
      </fieldset>
      <button className="btn" onClick={()=>{handleSubmit()}}>
        Update
      </button>
    </div>
  );
};

export default MemberUpdate;

