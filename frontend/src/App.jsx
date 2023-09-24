import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useApplicationData, ACTIONS } from "hooks/useApplicationData";
import "./App.scss";

const App = () => {
  //Uses the custom hook to retrieve the state and passes it and the dispatch function on the the children as props
  const { state, dispatch } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={state.topicData}
        photos={state.photoData}
        favourites={state.favourites}
        dispatch={dispatch}
        //Passes the dispatch again inside an object so it can be called with the type as a parameter along the appropriate payload
        onTopicClick={{
          dispatch: dispatch,
          type: ACTIONS.GET_PHOTOS_BY_TOPICS,
        }}
        photoDetails={ACTIONS.SELECT_PHOTO}
        //Depending on the value of Selected, the action to add or remove the photo from favourites will be called
        handleFavourites={{
          true: ACTIONS.FAV_PHOTO_ADDED,
          false: ACTIONS.FAV_PHOTO_REMOVED,
        }}
      />
      {
        //If the modal state is true, shows the selected photo in a modal window on top of the home page
        state.modalPhoto && (
          <PhotoDetailsModal
            photo={state.modalPhoto}
            favourites={state.favourites}
            dispatch={dispatch}
            //When the modal window is closed, set the modal state to null
            closeModal={() => {
              dispatch({ type: ACTIONS.SELECT_PHOTO, payload: null });
            }}
            photoDetails={ACTIONS.SELECT_PHOTO}
            //Depending on the value of Selected, the action to add or remove the photo from favourites will be called
            handleFavourites={{
              true: ACTIONS.FAV_PHOTO_ADDED,
              false: ACTIONS.FAV_PHOTO_REMOVED,
            }}
          />
        )
      }
    </div>
  );
};

export default App;
