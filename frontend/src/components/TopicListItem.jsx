import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, onTopicClick }) => {
  return (
    <div className="topic-list__item">
      <span
        onClick={() =>{
          //Hide the favourite photos if displayed 
          onTopicClick.dispatch({ type: onTopicClick.favType, payload: false });
          //Changes the 'filter' state, setting the Topic ID to filter the displayed photos
          onTopicClick.dispatch({ type: onTopicClick.topicType, payload: topic.id });
        }}
      >
        {topic.title}
      </span>
    </div>
  );
};

export default TopicListItem;
