import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photoData.map(x => <li key={x.id}><PhotoListItem data={x}/></li>)}
    </ul>
  );
};

export default PhotoList;
