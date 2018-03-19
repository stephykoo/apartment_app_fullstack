import React from 'react';
import ReactDOM from 'react-dom';
import NewApartment from '../NewApartment';
import { mount } from 'enzyme'

describe('<NewApartment />', () => {
  let component;

  beforeEach(() => {
    component = mount(<NewApartment />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<NewApartment />, div)
  })

  it('has a street_1 input', ()=>{
    expect(component.find('label#street_1').text()).toBe("Street_1")
  })

  it('has a street_2 input', ()=>{
    expect(component.find('label#street_2').text()).toBe("Street_2")
  })

  it('has a city input', ()=>{
    expect(component.find('label#city').text()).toBe("City")
  })

  it('has a state input', ()=>{
    expect(component.find('label#state').text()).toBe("State")
  })

  it('has a postal_code input', ()=>{
    expect(component.find('label#postal_code').text()).toBe("Postal_Code")
  })

  it('has a country input', ()=>{
    expect(component.find('label#country').text()).toBe("Country")
  })

  it('has a name input', ()=>{
    expect(component.find('label#name').text()).toBe("Name")
  })

  it('has a phone_number input', ()=>{
    expect(component.find('label#phone_number').text()).toBe("Phone_number")
  })

  it('has a contact_hours input', ()=>{
    expect(component.find('label#contact_hours').text()).toBe("Contact_Hours")
  })

  it('has a submit button', ()=>{
    expect(component.find('button#submit').text()).toBe("Create Apartment")
  })

  it("calls submitHandler on submit", ()=>{
    const mockSubmitHandler = jest.fn()
    const component = mount(<NewApartment onSubmit={mockSubmitHandler}/>)
    component.find('button#submit').simulate('click', {button: 0})
    expect(mockSubmitHandler.mock.calls.length).toBe(1)
  })

  it("passes values on submit", ()=>{
    const mockSubmitHandler = jest.fn();
    component = mount(<NewApartment onSubmit={mockSubmitHandler}/>);

    component.find('input[name="street_1"]').simulate(
      'change', {target: {value: '1 Street', name: 'street_1'}});
    component.find('input[name="street_2"]').simulate(
      'change', {target: {value: 'Unit 2', name: 'street_2'}});
    component.find('input[name="city"]').simulate(
      'change', {target: {value: 'Fake City', name: 'city'}});
    component.find('input[name="state"]').simulate(
      'change', {target: {value: 'Fake State', name: 'state'}});
    component.find('input[name="postal_code"]').simulate(
      'change', {target: {value: '12345', name: 'postal_code'}});
    component.find('input[name="country"]').simulate(
      'change', {target: {value: 'US', name: 'country'}});
    component.find('input[name="name"]').simulate(
      'change', {target: {value: 'Fake Name', name: 'name'}});
    component.find('input[name="phone_number"]').simulate(
      'change', {target: {value: '111-111-1111', name: 'phone_number'}});
    component.find('input[name="contact_hours"]').simulate(
      'change', {target: {value: 'Fake hours', name: 'contact_hours'}});
    component.find('button#submit').simulate('click', {button: 0});

    const submittedValues = mockSubmitHandler.mock.calls[0][0]

    expect(submittedValues["street_1"]).toBe("1 Street");
    expect(submittedValues["street_2"]).toBe("Unit 2");
    expect(submittedValues["city"]).toBe("Fake City");
    expect(submittedValues["state"]).toBe("Fake State");
    expect(submittedValues["postal_code"]).toBe("12345");
    expect(submittedValues["country"]).toBe("US");
    expect(submittedValues["name"]).toBe("Fake Name");
    expect(submittedValues["phone_number"]).toBe("111-111-1111");
    expect(submittedValues["contact_hours"]).toBe("Fake hours");
  });
});
