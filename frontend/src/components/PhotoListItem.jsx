import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";
import "../styles/PhotoDetailsModal.scss";

const PhotoListItem = ({
  photo,
  selected,
  handleFavourites,
  photoDetails,
  modal,
  dispatch,
}) => {
  const { urls, user, location } = photo;

  //The style of the PhotoListItem will change if it is shown on the main page or in a modal window
  return (
    <section
      className={modal ? "photo-details-modal__top-bar" : "photo-list__item"}
    >
      <div className={modal && "photo-details-modal__item"}>
        <div>
          <PhotoFavButton
            selected={selected}
            photo={photo}
            handleFavourites={handleFavourites}
            dispatch={dispatch}
          />
          {modal ? (
            <img className="photo-details-modal__image" src={urls.full} />
          ) : (
            <img
              className="photo-list__image"
              src={urls.regular}
              onClick={() => dispatch({ type: photoDetails, payload: photo })}
            />
          )}
        </div>
      </div>
      <div
        className={`photo-list__user-details ${
          modal && "photo-list-modal__user-details"
        }`}
      >
        <div>
          <img className="photo-list__user-profile" src={user.profile} />
        </div>
        <div>
          <div className="photo-list__user-info">{user.name}</div>
          <div className="photo-list__user-info photo-list__user-location">
            {`${location.city}, ${location.country}`}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoListItem;
