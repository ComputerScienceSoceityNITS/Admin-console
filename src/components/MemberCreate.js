import React, { useState } from "react";
import CreateMembers from "../services/Members/CreateMembers";
import Loader from "../components/loader";

const MemberCreate = ({ addMember, setAddMember, reloadReq, setReloadReq }) => {
  const [name, setName] = useState("John");
  const [image, setImage] = useState();
  const [role, setRole] = useState("Dev-Wing");
  const [session, setSession] = useState("22-23");
  const [year, setYear] = useState(2);
  const [social, setSocial] = useState({});
  const [dataTransfer, setDataTransfer] = useState(false);

  function handleSubmit(e) {
    const sendForm = new FormData();
    sendForm.set("name", name);
    sendForm.set("session", session);
    sendForm.set("socialMedia", JSON.stringify(social));
    sendForm.set("year", year);
    sendForm.set("role", role);
    sendForm.set("avatar", image);
    setDataTransfer(true);
    const members = CreateMembers(
      sendForm,
      setDataTransfer,
      reloadReq,
      setReloadReq
    );
  }

  return (
    <div className="createPage">
      {dataTransfer && (
        <div className="dataTransfer">
          <Loader />
        </div>
      )}
      <p className="btn close" onClick={() => setAddMember(!addMember)}>
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
        title="Uploaded Image"
        onChange={(e) => {
          const reader = new FileReader();
          reader.readAsDataURL(e.target.files[0]);
          console.log({ reader });
          reader.addEventListener("load", (e) => {
            const image = document.querySelector(".imageUpload");
            image.attributes.src.value = e.target.result;
          });
          setImage(e.target.files[0]);
        }}
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
      <img className="imageUpload" src="" alt="" />
      <button className="btn" onClick={handleSubmit}>
        Create
      </button>
    </div>
  );
};

export default MemberCreate;
