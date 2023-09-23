import React, { useReducer, useEffect } from "react";
import axios from "axios";

const END_POINTS = {
  GET_PHOTOS: "/api/photos",
  GET_PHOTOS_BY_TOPICS: "/api/topics/photos/",
  GET_TOPICS: "/api/topics",
};

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
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
    return { ...state, photoData: [...action.payload] };
  },
  SET_TOPIC_DATA(state, action) {
    return { ...state, topicData: [...action.payload] };
  },
  SELECT_PHOTO(state, action) {
    console.log(JSON.stringify(action.payload));
    return { ...state, modalPhoto: action.payload };
  },
  GET_PHOTOS_BY_TOPICS(state, action) {
    return { ...state, filter: action.payload };
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
  }, initial || { photoData: [], topicData: [], favourites: [], modalPhoto: null, filter: null });

  useEffect(() => {
    Promise.all([
      axios.get(END_POINTS.GET_PHOTOS),
      axios.get(END_POINTS.GET_TOPICS),
    ])
      .then((res) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res[0].data });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: res[1].data });
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(
        state.filter
          ? END_POINTS.GET_PHOTOS_BY_TOPICS + state.filter
          : END_POINTS.GET_PHOTOS
      )
      .then((res) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res.data })
      )
      .catch((error) => console.log(error));
  }, [state.filter]);

  return { state, dispatch };
};
