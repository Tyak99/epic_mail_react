import React from 'react';
import { shallow } from 'enzyme';
import { Draft } from '../../views/Draft/Draft';

const props = {
  getDraft: () => {},
};

describe('component: Draft', () => {
  it('should render correctly', (done) => {
    shallow(<Draft {...props} />);
    done();
  });
});
