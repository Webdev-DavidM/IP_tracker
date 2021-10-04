import React from 'react';

export default function Header() {
  return (
    <div className='app__header' data-test='header'>
      <p data-test='title' className='app__title app__title--white'>
        IP Address Tracker
      </p>
    </div>
  );
}
