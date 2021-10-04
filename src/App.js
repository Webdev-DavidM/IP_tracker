import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import './App.scss';
import Header from './components/Header';

function App() {
  const [long, setLong] = useState(2);
  const [lat, setLat] = useState(48);

  return (
    <div className='app'>
      <Header />
      <Map pos={[lat, long]} />
      <button
        onClick={() => {
          setLat(3);
          setLong(55);
        }}>
        Click to change pos
      </button>
    </div>
  );
}

export default App;
