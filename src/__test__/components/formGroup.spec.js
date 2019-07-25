import React from 'react';
import { shallow } from 'enzyme';
import FormGroup from '../../components/FormGroup/FormGroup';

const props = {
  type: 'text',
  id: 'inp',
  handleInput: () => {},
  name: 'text',
};
describe('component: FormGroup', () => {
  it('should render correctly', (done) => {
    const wrapper = shallow(<FormGroup {...props} />);
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
