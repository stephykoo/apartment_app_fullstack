import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import App from './App';

describe('<App />', () => {
  let component;

  beforeEach(() => {
    component = mount(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders add an apartment form', () => {
    expect(component.find('.subtitle').text()).toEqual('Add an Apartment');
  });

  it('links to apartment index', () => {
    component.find('a#apartments-link').simulate('click', { button: 0 });
    expect(component.find('.subtitle').text()).toEqual('All the Apartments');
  });
});
