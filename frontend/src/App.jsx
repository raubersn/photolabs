import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useApplicationData, ACTIONS } from "hooks/useApplicationData";
import "./App.scss";

const App = () => {
  const { state, dispatch } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={state.topicData}
        photos={state.photoData}
        favourites={state.favourites}
        dispatch={dispatch}
        onTopicClick={{
          dispatch: dispatch,
          type: ACTIONS.GET_PHOTOS_BY_TOPICS,
        }}
        photoDetails={ACTIONS.SELECT_PHOTO}
        handleFavourites={{
          true: ACTIONS.FAV_PHOTO_ADDED,
          false: ACTIONS.FAV_PHOTO_REMOVED,
        }}
      />
      {state.modalPhoto && (
        <PhotoDetailsModal
          photo={state.modalPhoto}
          favourites={state.favourites}
          dispatch={dispatch}
          closeModal={() => {
            dispatch({ type: ACTIONS.SELECT_PHOTO, payload: null });
          }}
          photoDetails={ACTIONS.SELECT_PHOTO}
          handleFavourites={{
            true: ACTIONS.FAV_PHOTO_ADDED,
            false: ACTIONS.FAV_PHOTO_REMOVED,
          }}
        />
      )}
    </div>
  );
};

export default App;
