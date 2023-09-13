import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favourites, handleFavourites, photoDetails }) => {

  return (    
    <ul className="photo-list">
      {photos.map(x => <li key={x.id}><PhotoListItem photo={x} favID={x.id} handleFavourites={handleFavourites} selected={favourites.filter(y => y === x.id).length > 0} photoDetails={photoDetails}/></li>)}
    </ul>
  );
};

export default PhotoList;
