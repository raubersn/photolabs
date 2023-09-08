import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const data = props.data;

  return (
    <section key={data.id}>
      <section>
        <img src={data.imageSource}/>
      </section>
      <section>
        <section>
          <img src={data.profile}/>
        </section>
        <section>
          <section>
            {data.username}
          </section>
          <section>
            {`${data.location.city}, ${data.location.country}`}
          </section>
        </section>
      </section>
    </section>
  );
};

export default PhotoListItem;
