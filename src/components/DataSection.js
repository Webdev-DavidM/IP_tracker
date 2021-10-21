import React from 'react';

export default function DataSection({ data }) {
  let { isp, timezone, location, ip } = data;
  return (
    <div data-test='data-section' className='app__data-section'>
      <div className='app__data-container'>
        <div className='app__data-heading'>IP ADDRESS</div>
        <div className='app__data-copy' data-test='address'>
          {ip && ip}
        </div>
      </div>
      <div className='app__data-container'>
        <div className='app__data-heading'>LOCATION</div>
        <div className='app__data-copy' data-test='location'>
          {location && location}
        </div>
      </div>
      <div className='app__data-container'>
        <div className='app__data-heading'>TIMEZONE</div>
        <div className='app__data-copy' data-test='timezone'>
          {timezone && timezone}
        </div>
      </div>
      <div className='app__data-container'>
        <div className='app__data-heading'>ISP</div>
        <div className='app__data-copy' data-test='isp'>
          {isp && isp}
        </div>
      </div>
    </div>
  );
}
