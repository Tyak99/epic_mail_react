import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/NotFound/NotFound';

describe('component: NotFound page', () => {
  it('should render correctly', (done) => {
    shallow(<NotFound />);
    done();
  });
});
