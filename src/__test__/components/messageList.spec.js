import React from 'react';
import { shallow } from 'enzyme';
import MessageList from '../../components/MessageList/MessageList';

const props = {
  messages: [],
  type: 'inbox',
};

describe('component: Inbox', () => {
  it('should render correctly', (done) => {
    shallow(<MessageList {...props} />);
    done();
  });
});
