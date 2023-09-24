import React, { useCallback, useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ selected, favID, handleFavourites, dispatch }) {
  return (
    <div
      className={`photo-list__fav-icon`}
      onClick={() =>
        //If the item is a favourite, the onClick Action will remove the photo from the favourites list.
        //If the item is not a favourite, the onClick Action will add the photo to the favourites list.
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
