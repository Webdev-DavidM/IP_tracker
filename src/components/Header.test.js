import Enzyme, { shallow } from 'enzyme';
import Header from './Header';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

// Helper function to keep the tests dry
let wrapper;

const setUpWrapper = (className) => {
  wrapper = shallow(<Header />);
  return wrapper.find(`[data-test="${className}"]`);
};

test('check that the header renders to the page', () => {
  const headerComponent = setUpWrapper('header');
  expect(headerComponent.length).toBe(1);
});

test('checks if the text "IP Address tracker renders to the page', () => {
  const headerText = setUpWrapper('title');
  expect(headerText.text()).toBe('IP Address Tracker');
});
