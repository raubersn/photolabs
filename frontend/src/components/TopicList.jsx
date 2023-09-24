import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, onTopicClick }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((x) => (
        <TopicListItem key={x.id} onTopicClick={onTopicClick} topic={x} />
      ))}
    </div>
  );
};

export default TopicList;
