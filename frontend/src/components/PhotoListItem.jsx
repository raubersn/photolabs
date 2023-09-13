import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";
import '../styles/PhotoDetailsModal.scss'

const PhotoListItem = ({ photo, selected, favID, handleFavourites, photoDetails, modal }) => {
  const { urls, user, location } = photo;

  const photographerInfo = <div className="photo-list__user-details ">
                            <div >
                              <img className="photo-list__user-profile" src={user.profile}/>
                            </div>
                            <div >
                              <div className="photo-list__user-info">{user.name}
                              </div>
                              <div className="photo-list__user-info photo-list__user-location">{`${location.city}, ${location.country}`}
                              </div>
                            </div>
                          </div>;

  return (<section className={modal ? "photo-details-modal__top-bar" : "photo-list__item"}>
            <div > 
              <PhotoFavButton selected={selected} favID={favID} handleFavourites={handleFavourites}/>
              {modal ? 
                <img className="photo-details-modal__image" src={urls.full}/>
              :
                <img className="photo-list__image" src={urls.regular} onClick={() => photoDetails(photo)}/>
              }
              {modal && photographerInfo}
            </div>
            {!modal && photographerInfo}
          </section>);
};

export default PhotoListItem;
