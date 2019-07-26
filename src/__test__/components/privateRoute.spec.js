import React from 'react';
import { shallow } from 'enzyme';
import { PrivateRoute } from '../../components/PrivateRoutes/PrivateRoutes';

const props = {
  isAuthenticated: true,
  path: '/inbox',
};

describe('component: PrivateRoute', () => {
  it('should render correctly', (done) => {
    const wrapper = shallow(<PrivateRoute {...props} />);
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
