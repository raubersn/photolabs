import React from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigation = ({ topics, isFavPhotoExist, onTopicClick }) => {
  return (
    <div className="top-nav-bar">
      <span
        className="top-nav-bar__logo"
        onClick={() =>
          //Allows the user to reset the Topics filter when clicking on the main Logo.
          //This action will show all the possible photos as it initially was displayed.
          onTopicClick.dispatch({ type: onTopicClick.type, payload: null })
        }
      >
        PhotoLabs
      </span>
      <div className="top-nav-bar__topic-list">
        <TopicList topics={topics} onTopicClick={onTopicClick} />
        <FavBadge isFavPhotoExist={isFavPhotoExist} />
      </div>
    </div>
  );
};

export default TopNavigation;
