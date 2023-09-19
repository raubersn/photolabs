import React, { useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
};

export const useApplicationData = (initial) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ACTIONS.FAV_PHOTO_ADDED:
        return {
          favourites: [...state.favourites, action.payload],
          modalPhoto: state.modalPhoto ? { ...state.modalPhoto } : null,
        };
      case ACTIONS.FAV_PHOTO_REMOVED:
        return {
          favourites: state.favourites.filter((x) => x !== action.payload),
          modalPhoto: state.modalPhoto ? { ...state.modalPhoto } : null,
        };
      case ACTIONS.SET_PHOTO_DATA:
        return {
          /* insert logic */
        };
      case ACTIONS.SET_TOPIC_DATA:
        return {
          /* insert logic */
        };
      case ACTIONS.SELECT_PHOTO:
        return {
          favourites: [...state.favourites],
          modalPhoto: action.payload,
        };
      case ACTIONS.DISPLAY_PHOTO_DETAILS:
        return {
          /* insert logic */
        };
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }, initial || { favourites: [], modalPhoto: null });

  return { state, dispatch };
};
