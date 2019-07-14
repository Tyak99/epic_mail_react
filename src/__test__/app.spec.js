import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('component: Homepage', () => {
  it('should render correctly', (done) => {
    shallow(<App />);
    done();
  });
});
