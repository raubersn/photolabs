import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, selected, favID, handleFavourites, photoDetails }) => {
  const { urls, user, location } = photo;

  return (
    <section className="photo-list__item">
      <div>
        <PhotoFavButton selected={selected} favID={favID} handleFavourites={handleFavourites}/>
        <img className="photo-list__image" src={urls.regular} onClick={() => photoDetails(photo)}/>
      </div>
      <div className="photo-list__user-details ">
        <div >
          <img className="photo-list__user-profile" src={user.profile}/>
        </div>
        <div >
          <div className="photo-list__user-info">{user.name}
          </div>
          <div className="photo-list__user-info photo-list__user-location">{`${location.city}, ${location.country}`}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoListItem;
