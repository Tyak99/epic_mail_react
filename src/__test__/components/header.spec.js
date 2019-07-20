import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header/Header';

const props = {
  toggle: () => {},
};

describe('component: Header', () => {
  it('should render correctly', (done) => {
    shallow(<Header {...props} />);
    done();
  });
});
