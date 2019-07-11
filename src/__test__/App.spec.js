import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('component: App', () => {
  it('renders correctly', () => {
    shallow(<App />);
  });
});
