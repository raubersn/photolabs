import React from "react";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";

const FavBadge = ({ isFavPhotoExist, onFavouritesClick }) => {
  return (
    <div className="fav-badge">
      <FavIcon
        displayAlert={!!isFavPhotoExist}
        selected={true}
        className="fav-icon__count"
        onFavouritesClick={onFavouritesClick}
      />
    </div>
  );
};

export default FavBadge;
