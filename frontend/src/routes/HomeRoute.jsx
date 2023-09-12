import React, { useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos, photoDetails }) => {
  const [getFavourites, setFavourites] = useState(['1', '3', '4', '7', '8']);

  const handleFavourites = (favID, selected) => {
    if (selected) {
      setFavourites([...getFavourites, favID]);
    }
    else {
      setFavourites(getFavourites.filter(x => x !== favID));
    }
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={(getFavourites.length > 0)}/>
      <PhotoList photos={photos} favourites={getFavourites} handleFavourites={handleFavourites} photoDetails={photoDetails}/>
    </div>
  );
};

export default HomeRoute;
