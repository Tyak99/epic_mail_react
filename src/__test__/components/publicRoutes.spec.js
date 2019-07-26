import React from 'react';
import { shallow } from 'enzyme';
import { PublicRoutes } from '../../components/PublicRoutes/PublicRoutes';

const props = {
  isAuthenticated: true,
  path: '/',
};

describe('component: PrivateRoute', () => {
  it('should render correctly', (done) => {
    const wrapper = shallow(<PublicRoutes {...props} />);
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
