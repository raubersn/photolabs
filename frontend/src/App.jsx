import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
import "./App.scss";

import topics from "mocks/topics";
import photos from "mocks/photos";

const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        photoDetails={onPhotoSelect}
        favourites={state.favourites}
        handleFavourites={updateToFavPhotoIds}
      />
      {state.modalPhoto && (
        <PhotoDetailsModal
          photo={state.modalPhoto}
          closeModal={onClosePhotoDetailsModal}
          photoDetails={onPhotoSelect}
          favourites={state.favourites}
          handleFavourites={updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;
