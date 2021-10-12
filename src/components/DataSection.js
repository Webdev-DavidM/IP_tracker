import React from 'react';

export default function DataSection(props) {
  return (
    <div data-test='data-section'>
      <div data-test='address'>{props.address}</div>
      <div data-test='location'>{props.location}</div>
      <div data-test='timezone'>{props.timezone}</div>
    </div>
  );
}
