import React from 'react';
import { shallow } from 'enzyme';
import RegisterUi from '../../components/RegisterUi/RegisterUi';

const props = {
  submit: () => {},
  handleInput: () => {},
};
describe('component: RegisterUi', () => {
  it('should render correctly', (done) => {
    const wrapper = shallow(<RegisterUi {...props} />);
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
