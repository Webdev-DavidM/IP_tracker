import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import DataSection from './DataSection';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

test('test that the component renders to the page', () => {
  expect(
    shallow(<DataSection />).find('[data-test="data-section"]').length
  ).toBe(1);
});

describe('test that each data section renders the data to the page from props', () => {
  let mockProps;
  let DataSectionComponent;
  beforeEach(() => {
    mockProps = {
      address: '192.3.2.1',
      location: 'London',
      timezone: 'UTC-05.00',
      ISP: 'Space X',
    };
    DataSectionComponent = shallow(<DataSection {...mockProps} />);
  });
  test('test if address data is rendered to the page', () => {
    let addressData = DataSectionComponent.find('[data-test="address"]');
    expect(addressData.text()).toBe('192.3.2.1');
  });
  test('test if location data is rendered to the page', () => {
    let locationData = DataSectionComponent.find('[data-test="location"]');
    expect(locationData.text()).toBe('London');
  });
  test('test if timezone data is rendered to the page', () => {
    let timezoneData = DataSectionComponent.find('[data-test="timezone"]');
    expect(timezoneData.text()).toBe('UTC-05.00');
  });
  test('test if ISP data is rendered to the page', () => {
    let ISPData = DataSectionComponent.find('[data-test="isp"]');
    expect(ISPData.text()).toBe('Space X');
  });
});
