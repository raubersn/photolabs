import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ selected, favID, handleFavourites }) {
  return (
    <div className={`photo-list__fav-icon`} onClick={() => handleFavourites(favID, !selected)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;