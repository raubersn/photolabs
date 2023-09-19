import React, { useCallback, useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ selected, favID, handleFavourites, dispatch }) {
  return (
    <div
      className={`photo-list__fav-icon`}
      onClick={() =>
        dispatch({ type: handleFavourites[!selected], payload: favID })
      }
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} className="fav-icon__button" />
      </div>
    </div>
  );
}

export default PhotoFavButton;
