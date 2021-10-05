import React from 'react';

export default function SearchBar({ searchFunction }) {
  const [userInput, setUserInput] = React.useState('');
  const [error, setError] = React.useState(false);

  return (
    <div data-test='search-bar'>
      <input
        data-test='input'
        type='text'
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button
        data-test='search-button'
        className='app__search-bar'
        onClick={() =>
          userInput !== '' ? searchFunction(userInput) : setError(true)
        }>
        <img src='./images/icon-arrow.svg' alt='' />
        click
      </button>
      {error && <p data-test='error'>Please enter a value</p>}
    </div>
  );
}
