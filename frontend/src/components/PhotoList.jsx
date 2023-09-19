import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favourites, handleFavourites, photoDetails, dispatch }) => {

  return (    
    <ul className="photo-list">
      {photos.map(x => <li key={x.id}><PhotoListItem photo={x} favID={x.id} handleFavourites={handleFavourites} selected={favourites.filter(y => y === x.id).length > 0} photoDetails={photoDetails} dispatch={dispatch}/></li>)}
    </ul>
  );
};

export default PhotoList;
