import React from 'react';
import { shallow } from 'enzyme';
import { Sent } from '../../views/Sent/Sent';

const props = {
  sentMessages: [],
  getSentMessages: () => {},
};

describe('component: Sent', () => {
  it('should render correctly', (done) => {
    shallow(<Sent {...props} />);
    done();
  });
});
