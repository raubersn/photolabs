import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [getFavourite, setFavourite] = useState(false);

  return (
    <div className={`photo-list__fav-icon`} onClick={() => setFavourite(!getFavourite)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={getFavourite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;