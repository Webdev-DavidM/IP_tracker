import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React, { useState, useEffect } from 'react';
import Map from './Map';

function App() {
   const [long, setLong] = useState(2);
   const [lat, setLat] = useState(48);

   return (
      <div className='App'>
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
