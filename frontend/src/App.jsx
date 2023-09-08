import React from 'react';
import PhotoList from 'components/PhotoList';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const sampleDataForPhotoListItem = {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  };

  const photoList = new Array(sampleDataForPhotoListItem, sampleDataForPhotoListItem, sampleDataForPhotoListItem);

  return (
    <div className="App">
      <PhotoList photoData={photoList}/>
    </div>
  );
};

export default App;
