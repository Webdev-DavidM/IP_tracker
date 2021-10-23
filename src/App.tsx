import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import './App.scss';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import DataSection from './components/DataSection';

interface Props {
  isp: string;
  timezone: string;
  location: string;
  ip: string;
}

function App() {
  const [long, setLong] = useState(2);
  const [lat, setLat] = useState(48);
  const [data, setData] = useState<null | Props>(null);

  useEffect(() => {
    search(null);
  }, []);

  interface Data {
    ip: string;
  }

  const search = async (ipAddress: string | null) => {
    let data;
    if (ipAddress) {
      data = await fetch(
        `https://geo.ipify.org/api/v1?apiKey=at_NWL0fpG63VI0ZH894ZRJh7FexTgjP&ipAddress=${ipAddress}`
      );
    } else {
      let userIp = await fetch('https://api.ipify.org?format=json');
      let userIpJson: { ip: string } = await userIp.json();
      data = await fetch(
        `https://geo.ipify.org/api/v1?apiKey=at_NWL0fpG63VI0ZH894ZRJh7FexTgjP&ipAddress=${userIpJson.ip}`
      );
    }
    data = await data.json();
    let { lat, lng, timezone } = data.location;
    let ip = data.ip;
    let isp = data.isp;
    setData({ timezone, isp, ip, location: data.location.region });
    setLong(lng);
    setLat(lat);
  };

  return (
    <div className='app'>
      <SearchBar searchFunction={search} />
      {data && <DataSection data={data} />}
      <Header />
      <Map pos={[lat, long]} />
    </div>
  );
}

export default App;
