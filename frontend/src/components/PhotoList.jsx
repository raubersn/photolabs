import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos }) => {
  return (
    <ul className="photo-list">
      {photos.map(x => <li key={x.id}><PhotoListItem photo={x}/></li>)}
    </ul>
  );
};

export default PhotoList;
