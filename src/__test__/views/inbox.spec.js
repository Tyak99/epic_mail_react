import React from 'react';
import { shallow } from 'enzyme';
import { Inbox } from '../../views/Inbox/Inbox';

const props = {
  messages: [],
  getInbox: () => {},
};

describe('component: Inbox', () => {
  it('should render correctly', (done) => {
    shallow(<Inbox {...props} />);
    done();
  });
});
