import React, { useState } from "react";

const useApplicationData = (initial) => {
  const [state, setState] = useState(
    !initial && { favourites: [], modalPhoto: null }
  );

  const onPhotoSelect = (photo) => {
    setState({ favourites: [...state.favourites], modalPhoto: photo });
  };

  const onClosePhotoDetailsModal = () => {
    setState({ favourites: [...state.favourites], modalPhoto: null });
  };

  const updateToFavPhotoIds = (favID, selected) => {
    if (selected) {
      setState({
        favourites: [...state.favourites, favID],
        modalPhoto: !state.modalPhoto ? null : { ...state.modalPhoto },
      });
    } else {
      setState({
        favourites: state.favourites.filter((x) => x !== favID),
        modalPhoto: !state.modalPhoto ? null : { ...state.modalPhoto },
      });
    }
  };

  const onLoadTopic = () => {
    return null;
  };

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
