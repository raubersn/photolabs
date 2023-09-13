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

  const [getFavourites, setFavourites] = useState(['1', '3', '4', '7', '8']);

  const handleFavourites = (favID, selected) => {
    if (selected) {
      setFavourites([...getFavourites, favID]);
    }
    else {
      setFavourites(getFavourites.filter(x => x !== favID));
    }
  };

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} photoDetails={showModal} favourites={getFavourites} handleFavourites={handleFavourites}/>
      {getModal && <PhotoDetailsModal photo={getModal} closeModal={() => showModal(null)} photoDetails={showModal} favourites={getFavourites} handleFavourites={handleFavourites}/>}
    </div>
  );
};

export default App;