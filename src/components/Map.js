import React from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

export default function Map({ pos }) {
  function MyComponent() {
    const map = useMap();
    map.setView(pos);
    return null;
  }

  return (
    <MapContainer
      style={{ height: '80vh' }}
      center={pos}
      zoom={20}
      scrollWheelZoom={false}>
      <MyComponent />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={pos}></Marker>
    </MapContainer>
  );
}
