import React, { useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
};

const reducers = {
  FAV_PHOTO_ADDED(state, action) {
    return {
      favourites: [...state.favourites, action.payload],
      modalPhoto: state.modalPhoto ? { ...state.modalPhoto } : null,
    };
  },
  FAV_PHOTO_REMOVED(state, action) {
    return {
      favourites: state.favourites.filter((x) => x !== action.payload),
      modalPhoto: state.modalPhoto ? { ...state.modalPhoto } : null,
    };
  },
  SET_PHOTO_DATA(state, action) {
    return {
      /* insert logic */
    };
  },
  SET_TOPIC_DATA(state, action) {
    return {
      /* insert logic */
    };
  },
  SELECT_PHOTO(state, action) {
    return {
      favourites: [...state.favourites],
      modalPhoto: action.payload,
    };
  },
  DISPLAY_PHOTO_DETAILS(state, action) {
    return {
      /* insert logic */
    };
  },
};

export const useApplicationData = (initial) => {
  const [state, dispatch] = useReducer((state, action) => {
    if (reducers[action.type]) {
      return reducers[action.type](state, action);
    } else {
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
    }
  }, initial || { favourites: [], modalPhoto: null });

  return { state, dispatch };
};
