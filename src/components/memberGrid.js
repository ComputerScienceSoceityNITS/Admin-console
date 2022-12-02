import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
export const gridMemberImage = (props) => (
  <div>
    <img src={props.avatar.url} alt={props.avatar.public_id} />
  </div>
);
export const gridMemberFB = (props) => (
  <div>
    <a href={props.socialMedia.facebook}>
      <AiFillFacebook />
    </a>
  </div>
);
export const gridMemberGI = (props) => (
  <div>
    <a href={props.socialMedia.github}>
      <AiFillGithub />
    </a>
  </div>
);
export const gridMemberLI = (props) => (
  <div>
    <a href={props.socialMedia.linkedin}>
      <AiFillLinkedin />
    </a>
  </div>
);
export const memberGrid = [
  {
    headerText: "Image",
    template: gridMemberImage,
    textAlign: "Center",
    width: "120",
  },
  {
    field: "name",
    headerText: "Name",
    width: "150",
    editType: "defaultEdit",
    textAlign: "Center",
  },
  {
    field: "role",
    headerText: "Role",
    width: "150",
    editType: "defaultEdit",
    textAlign: "Center",
  },
  {
    field: "session",
    headerText: "Session",
    width: "150",
    editType: "defaultEdit",
    textAlign: "Center",
  },
  {
    field: "year",
    headerText: "Year",
    width: "150",
    editType: "defaultEdit",
    textAlign: "Center",
  },
  {
    template: gridMemberFB,
    headerText: "Fb",
    width: "50",
    editType: "defaultEdit",
    textAlign: "Center",
  },

  {
    template: gridMemberGI,
    headerText: "Gi",
    width: "50",
    editType: "defaultEdit",
    textAlign: "Center",
  },
  {
    template: gridMemberLI,
    headerText: "In",
    width: "50",
    editType: "defaultEdit",
    textAlign: "Center",
  },
];
