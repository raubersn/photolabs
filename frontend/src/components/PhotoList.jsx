import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favourites, handleFavourites, photoDetails }) => {

  const isSelected = (id) => {
    return (favourites.filter(x => x === id).length > 0);
  }

  return (    
    <ul className="photo-list">
      {photos.map(x => <li key={x.id}><PhotoListItem photo={x} favID={x.id} handleFavourites={handleFavourites} selected={isSelected(x.id)} photoDetails={photoDetails}/></li>)}
    </ul>
  );
};

export default PhotoList;
