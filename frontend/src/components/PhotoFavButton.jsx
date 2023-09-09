import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [getFavorite, setFavorite] = useState(false);

  return (
    <div className={`photo-list__fav-icon`} onClick={() => setFavorite(!getFavorite)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={getFavorite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;