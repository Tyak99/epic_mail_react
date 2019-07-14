import React from 'react';
import { shallow } from 'enzyme';
import Homepage from '../../views/Homepage/Homepage';

describe('component: Homepage', () => {
  it('should render correctly', (done) => {
    shallow(<Homepage />);
    done();
  });
});
