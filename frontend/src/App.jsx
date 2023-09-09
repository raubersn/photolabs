import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';

import topics from 'mocks/topics';
import photos from 'mocks/photos';

const App = () => {
  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos}/>
    </div>
  );
};

export default App;