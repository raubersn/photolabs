import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, onTopicClick }) => {
  return (
    <div className="topic-list__item">
      <span
        onClick={() =>
          //Changes the 'filter' state, setting the Topic ID to filter the displayed photos
          onTopicClick.dispatch({ type: onTopicClick.type, payload: topic.id })
        }
      >
        {topic.title}
      </span>
    </div>
  );
};

export default TopicListItem;
