import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../../components/Sidebar/Sidebar';

describe('component: Sidebar', () => {
  it('should render correctly', (done) => {
    shallow(<Sidebar isOpen />);
    done();
  });
  it('should render correctly when isOpen is false', (done) => {
    shallow(<Sidebar />);
    done();
  });
});
