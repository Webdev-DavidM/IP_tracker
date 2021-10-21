import React from 'react';
import ArrowImg from '../images/icon-arrow.svg';

export default function SearchBar({ searchFunction }) {
  const [userInput, setUserInput] = React.useState('');
  const [error, setError] = React.useState(false);

  const submit = () => {
    if (userInput !== '') {
      setError(false);
      searchFunction(userInput);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div data-test='search-bar' className='app__search-bar'>
        <input
          data-test='input'
          className='app__input'
          type='text'
          placeholder='Search for any IP address or domain'
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <div
          data-test='search-button'
          className='app__search-button'
          onClick={() => submit()}>
          <img src={ArrowImg} alt='' />
        </div>
      </div>
      {error && (
        <p className='app__error' data-test='error'>
          Please enter a value
        </p>
      )}
    </>
  );
}
