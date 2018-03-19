import React from 'react';
import ReactDOM from 'react-dom';
import NewApartment from '../NewApartment';
import { mount } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewApartment />, div)
})

it('has a street_1 input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#street_1').text()).toBe("Street_1")
})

it('has a street_2 input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#street_2').text()).toBe("Street_2")
})

it('has a city input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#city').text()).toBe("City")
})

it('has a state input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#state').text()).toBe("State")
})

it('has a postal_code input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#postal_code').text()).toBe("Postal_Code")
})

it('has a country input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#country').text()).toBe("Country")
})

it('has a name input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#name').text()).toBe("Name")
})

it('has a phone_number input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#phone_number').text()).toBe("Phone_number")
})

it('has a contact_hours input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#contact_hours').text()).toBe("Contact_Hours")
})
