import React from 'react';
import { shallow } from 'enzyme';
import SidebarLink from '../../components/SidebarLink/SidebarLink';

const props = {
  link: 'http',
  icon: 'icon',
  name: 'sent',
  isActive: true,
};
describe('component: Sidebar', () => {
  it('should render correctly', (done) => {
    shallow(<SidebarLink {...props} />);
    done();
  });
});
