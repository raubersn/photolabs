import React from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  topics,
  photos,
  photoDetails,
  favourites,
  handleFavourites,
  dispatch
}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={favourites.length > 0} />
      <PhotoList
        photos={photos}
        favourites={favourites}
        dispatch={dispatch}
        handleFavourites={handleFavourites}
        photoDetails={photoDetails}
      />
    </div>
  );
};

export default HomeRoute;
