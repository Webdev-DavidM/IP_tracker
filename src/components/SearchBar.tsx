import React from 'react';
import ArrowImg from '../images/icon-arrow.svg';

interface Props {
  searchFunction(search: string): void;
}

export default function SearchBar({ searchFunction }: Props) {
  const [userInput, setUserInput] = React.useState('');
  const [error, setError] = React.useState('');

  const submit = () => {
    const re =
      /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (userInput.match(re)) {
      setError('');
      searchFunction(userInput);
    } else {
      setError('Please enter a valid id address ie 1.32.2.65');
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
          {error}
        </p>
      )}
    </>
  );
}
