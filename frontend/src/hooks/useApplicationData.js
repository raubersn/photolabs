import React, { useReducer, useEffect } from "react";
//importing Axios do replace the Fetch for data retrieving
import axios from "axios";

//Constant object containing the end potins' URL
const END_POINTS = {
  GET_PHOTOS: "/api/photos",
  GET_PHOTOS_BY_TOPICS: "/api/topics/photos/",
  GET_TOPICS: "/api/topics",
};

//Constant object containing the actions to be used in the custom hook extending useReducer
export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
};

//Reducer object containing the functions to be called in the custom hook extending useReducer according to the selected action
//This object replace the need of an IF clause chain or SWITCH-CASE
const reducers = {
  //Adds a photo to the favourites
  FAV_PHOTO_ADDED(state, action) {
    return { ...state, favourites: [...state.favourites, action.payload] };
  },
  //Removes a photo from favourites
  FAV_PHOTO_REMOVED(state, action) {
    return {
      ...state,
      favourites: state.favourites.filter((x) => x !== action.payload),
    };
  },
  //Load the set of photos into the state
  SET_PHOTO_DATA(state, action) {
    return { ...state, photoData: [...action.payload] };
  },
  //Load the set of topics into the state
  SET_TOPIC_DATA(state, action) {
    return { ...state, topicData: [...action.payload] };
  },
  //Loads the selected photo be be displayed in Modal mode
  SELECT_PHOTO(state, action) {
    return { ...state, modalPhoto: action.payload };
  },
  //Sets the selected topic as a filter to the photos
  GET_PHOTOS_BY_TOPICS(state, action) {
    return { ...state, filter: action.payload };
  },
};

//Custom hook extending useReducer to store the necessary application state
export const useApplicationData = (initial) => {
  const [state, dispatch] = useReducer((state, action) => {
    if (reducers[action.type]) {
      //if the action is found withing the reducer object, calls that function with the received parameters
      return reducers[action.type](state, action);
    } else {
      //if the action is not found, throws an error
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
    }
    //if an initial state is passed as a parameter, it will be used. If not, the object is mounted with the required keys
  }, initial || { photoData: [], topicData: [], favourites: [], modalPhoto: null, filter: null });

  //After the virtual DOM is mounted for the first time, loads the all the photos and topics
  useEffect(() => {
    //Once both datasets are required, Promise.all is used to ensure both promises resolve
    Promise.all([
      //Fetches the photos dataset
      axios.get(END_POINTS.GET_PHOTOS),
      //Fetches the topcis dataset
      axios.get(END_POINTS.GET_TOPICS),
    ])
      .then((res) => {
        //updates the currennt state with the datasets
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res[0].data });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: res[1].data });
      })
      .catch((error) => console.log(error));
  }, []);

  //Checks if a topic is used as a filter everytime its state changes and loads the new photo dataset from the database
  useEffect(() => {
    axios
      .get(
        //Selects the API endpoint according to the use of the filter, fetching all photos if it's not used
        state.filter
          ? END_POINTS.GET_PHOTOS_BY_TOPICS + state.filter
          : END_POINTS.GET_PHOTOS
      )
      .then((res) =>
        //Load the photos dataset into the state
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res.data })
      )
      .catch((error) => console.log(error));
  }, [state.filter]);

  return { state, dispatch };
};
