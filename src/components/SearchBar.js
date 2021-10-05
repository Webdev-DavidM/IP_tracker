import React from 'react';
import ArrowImg from '../images/icon-arrow.svg';

export default function SearchBar({ searchFunction }) {
  const [userInput, setUserInput] = React.useState('');
  const [error, setError] = React.useState(false);

  return (
    <div data-test='search-bar' className='app__search-bar'>
      <input
        data-test='input'
        className='app__input'
        type='text'
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <div
        data-test='search-button'
        className='app__search-button'
        onClick={() =>
          userInput !== '' ? searchFunction(userInput) : setError(true)
        }>
        <img src={ArrowImg} alt='' />
      </div>
      {error && <p data-test='error'>Please enter a value</p>}
    </div>
  );
}
