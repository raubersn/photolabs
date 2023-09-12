import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

import topics from 'mocks/topics';
import photos from 'mocks/photos';

const App = () => {
  const [getModal, setModal] = useState(null);

  const showModal = (photo) => {
    setModal(photo);
  };

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} photoDetails={showModal}/>
      {getModal && <PhotoDetailsModal photo={getModal} closeModal={() => showModal(null)}/>}
    </div>
  );
};

export default App;