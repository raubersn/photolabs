import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoListItem from "components/PhotoListItem";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({
  photo,
  closeModal,
  photoDetails,
  favourites,
  handleFavourites,
}) => {
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={closeModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoListItem
        modal={true}
        photo={photo}
        selected={favourites.filter((x) => x === photo.id).length > 0}
        handleFavourites={handleFavourites}
        favID={photo.id}
      />
      <label className="photo-details-modal__header">Similar Photos</label>
      <PhotoList
        photos={photo.similar_photos}
        favourites={favourites}
        handleFavourites={handleFavourites}
        photoDetails={photoDetails}
      />
    </div>
  );
};

export default PhotoDetailsModal;
