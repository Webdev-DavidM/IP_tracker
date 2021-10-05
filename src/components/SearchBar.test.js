import Enzyme, { shallow, mount } from 'enzyme';
import React from 'react';
import SearchBar from './SearchBar';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

// Helper function to keep the tests dry
let wrapper;
let originalInputState = React.useState;

const setUpWrapper = (className) => {
  wrapper = shallow(<SearchBar />);
  return wrapper.find(`[data-test="${className}"]`);
};

test('The Searchbar component renders to the page', () => {
  const SearchBarComponent = setUpWrapper('search-bar');
  expect(SearchBarComponent.length).toBe(1);
});

test('The text displays on the screen when you user types', () => {
  let mockUserInput = jest.fn();
  React.useState = jest.fn(() => ['', mockUserInput]);
  const inputBox = setUpWrapper('input');
  const mockInput = { target: { value: '132.2.3.1' } };
  inputBox.simulate('change', mockInput);
  expect(mockUserInput).toHaveBeenCalledWith('132.2.3.1');
  React.useState = originalInputState;
});

test('When the user clicks the submit button, a function is called to pass the information to state', () => {
  let mockUserInput = jest.fn();
  React.useState = jest.fn(() => ['22', mockUserInput]);
  let mockSearchFunction = jest.fn();
  let SearchBarComponent = shallow(
    <SearchBar searchFunction={mockSearchFunction} />
  );
  let searchButton = SearchBarComponent.find('[data-test="search-button"]');
  searchButton.simulate('click', { preventDefault() {} });
  expect(mockSearchFunction).toHaveBeenCalled();
  React.useState = originalInputState;
});

// This is a functional test as I am simulating a user click, allowing the mounted
// app to change the state and then at the end I am testing the error message shown

test('if the user input is blank, an error message is received', () => {
  let wrapper = mount(<SearchBar />);
  let button = wrapper.find('[data-test="search-button"]');
  button.simulate('click', { preventDefault() {} });
  let error = wrapper.find('[data-test="error"]');
  expect(error).toHaveLength(1);
});
