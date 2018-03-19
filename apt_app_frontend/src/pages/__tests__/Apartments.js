import React from 'react';
import ReactDOM from 'react-dom';
import Apartments from '../Apartments';
import { mount } from 'enzyme';

const apartments = [
  {
    id: 0,
    street_1: '1234 Plum Road',
    city: 'Fruit',
    state: 'Produce',
    postal_code: '12345',
    country: 'USA',
    name: 'Farmer John',
    phone_number: '123-456-7890',
    contact_hours: 'Tuesdays and Thursdays 12pm-4pm'
  },
  {
    id: 1,
    street_1: '2211 Bluebird Lane',
    city: 'Aviary',
    state: 'Zoop',
    postal_code: '54321',
    country: 'USA',
    name: 'Birch Tree',
    phone_number: '123-456-7890',
    contact_hours: 'Weekends only'
  },
  {
    id: 2,
    street_1: '7359 Gummy Bear Drive',
    city: 'Sour',
    state: 'Patch',
    postal_code: '12121',
    country: 'USA',
    name: 'Elle Woods',
    phone_number: '123-456-7890',
    contact_hours: 'Monday afternoons'
  }
];

describe('<Apartments />', () => {
  let component;
  beforeEach(() => {
    component = mount(<Apartments apartments={apartments} />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Apartments apartments={apartments} />, div);
  });

  it('renders the apartments', () => {
    const headings = component.find('h4 > .apt-street-1');
    expect(headings.length).toBe(3);
  });

  it("renders the apartment's street_1", () => {
    const street_1 = component.find('h4 > .apt-street-1').first();
    expect(street_1.text()).toBe('1234 Plum Road');
  });

  it("renders the apartment's city", () => {
    const city = component.find('.apt-city').first();
    expect(city.text()).toBe('Fruit');
  });

  it("renders the apartment's state", () => {
    const state = component.find('.apt-state').first();
    expect(state.text()).toBe('Produce');
  });

  it("renders the apartment's postal_code", () => {
    const postal_code = component.find('.apt-postal-code').first();
    expect(postal_code.text()).toBe('12345');
  });

  it("renders the apartment's country", () => {
    const country = component.find('.apt-country').first();
    expect(country.text()).toBe('USA');
  });

  it("renders the apartment's contact name", () => {
    const name = component.find('.apt-name').first();
    expect(name.text()).toBe('Farmer John');
  });

  it("renders the apartment's contact phone number", () => {
    const phone_number = component.find('.apt-phone-number').first();
    expect(phone_number.text()).toBe('123-456-7890');
  });

  it("renders the apartment's contact hours", () => {
    const contact_hours = component.find('.apt-contact-hours').first();
    expect(contact_hours.text()).toBe('Tuesdays and Thursdays 12pm-4pm');
  });
});
