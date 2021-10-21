import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import './App.scss';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import DataSection from './components/DataSection';

function App() {
  const [long, setLong] = useState(2);
  const [lat, setLat] = useState(48);
  const [data, setData] = useState(null);

  useEffect(() => {
    search();
  }, []);

  const search = async (ipAddress) => {
    let data;
    if (ipAddress) {
      data = await fetch(
        `https://geo.ipify.org/api/v1?apiKey=at_NWL0fpG63VI0ZH894ZRJh7FexTgjP&ipAddress=${ipAddress}`
      );
    } else {
      let userIp = await fetch('https://api.ipify.org?format=json');
      userIp = await userIp.json();
      data = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_NWL0fpG63VI0ZH894ZRJh7FexTgjP&ipAddress=${userIp.ip}`
    );
    }
    data = await data.json();
    let { lat, lng, timezone } = data.location;
    let ip= data.ip;
    let isp = data.isp
    setData({ timezone, isp, ip, location: data.location.region });
    setLong(lng);
    setLat(lat);
  };

  return (
    <div className='app'>
      <SearchBar searchFunction={search} />
      {data &&  <DataSection data={data} />}
      <Header />
      <Map pos={[lat, long]} />
    </div>
  );
}

export default App;
