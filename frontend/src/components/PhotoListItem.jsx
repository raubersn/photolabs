import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const data = props.data;

  return (
    <section className="photo-list__item">
      <div>
        <img className="photo-list__image" src={data.imageSource}/>
      </div>
      <div className="photo-list__user-details ">
        <div >
          <img className="photo-list__user-profile" src={data.profile}/>
        </div>
        <div >
          <div className="photo-list__user-info">{data.username}
          </div>
          <div className="photo-list__user-info photo-list__user-location">{`${data.location.city}, ${data.location.country}`}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoListItem;
