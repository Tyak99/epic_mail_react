import { shallow } from 'enzyme';
import React from 'react';
import LoginUi from '../../components/LoginUi/LoginUi';


const props = {
  loading: true,
  submit: () => {},
  change: () => {},
};
describe('component: LoginUi', () => {
  it('renders correctly', (done) => {
    shallow(<LoginUi {...props} />);
    done();
  });
});
