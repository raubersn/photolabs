import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({
  photos,
  favourites,
  handleFavourites,
  photoDetails,
  dispatch,
}) => {
  return (
    <ul className="photo-list">
      {photos.map((x) => (
        <li key={x.id}>
          <PhotoListItem
            photo={x}
            handleFavourites={handleFavourites}
            //Mark the item as a favourite if it was found in the favourites list
            selected={favourites.filter((y) => y.id === x.id).length > 0}
            photoDetails={photoDetails}
            dispatch={dispatch}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
