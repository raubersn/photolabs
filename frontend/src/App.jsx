import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

import topics from 'mocks/topics';
import photos from 'mocks/photos';

const App = () => {
  const [getModal, setModal] = useState(0);

  const showModal = (photoID) => {
    setModal(photoID);
  };

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} photoDetails={showModal}/>
      {getModal && <PhotoDetailsModal closeModal={() => showModal(0)}/>}
    </div>
  );
};

export default App;