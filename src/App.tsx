import React from 'react';
import './App.css';
import testImageOne from './images/test-image-1.jpg'

function App() {
  return (
    <div className="App">
      <br />
      <img alt="" src={testImageOne} height="600" width="400"/>
      <p>
        Photos by Matt Wener
      </p>
    </div>
  );
}

export default App;
