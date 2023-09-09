import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topicData.map(x => <TopicListItem key={x.id} topic={x} />)}
    </div>
    
  );
};

export default TopicList;
