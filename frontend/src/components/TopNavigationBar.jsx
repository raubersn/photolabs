import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({ topics, isFavPhotoExist }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className='top-nav-bar__topic-list'>
        <TopicList topics={topics}/>
        <FavBadge isFavPhotoExist={isFavPhotoExist}/>      
      </div>
    </div>
  )
}

export default TopNavigation;