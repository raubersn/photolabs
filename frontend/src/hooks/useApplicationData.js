import React, { useReducer, useEffect } from "react";

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
    return { ...state, favourites: [...state.favourites, action.payload] };
  },
  FAV_PHOTO_REMOVED(state, action) {
    return {
      ...state,
      favourites: state.favourites.filter((x) => x !== action.payload),
    };
  },
  SET_PHOTO_DATA(state, action) {
    return { ...state, photoData: action.payload };
  },
  SET_TOPIC_DATA(state, action) {
    return { ...state, topicData: action.payload };
  },
  SELECT_PHOTO(state, action) {
    return { ...state, modalPhoto: action.payload };
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
  }, initial || { photoData: [], topicData: [], favourites: [], modalPhoto: null });

  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      );
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })
      );
  }, []);

  return { state, dispatch };
};
