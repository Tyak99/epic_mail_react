import React from 'react';
import { shallow } from 'enzyme';
import { SingleMessage } from '../../components/SingleMessage/SingleMessage';

const props = {
  message: {},
  match: { params: {} },
  getMessage: () => {},
};
describe('component: SingleMessage', () => {
  it('should render correctly', (done) => {
    const wrapper = shallow(<SingleMessage {...props} />);
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
