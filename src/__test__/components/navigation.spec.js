import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Navigation from '../../components/Navigation/Navigation';


describe('component: Navigation', () => {
  beforeEach(() => {
    sinon.spy(Navigation.prototype, 'toggle');
  });
  afterEach(() => {
    Navigation.prototype.toggle.restore();
  });
  it('should render correctly', (done) => {
    shallow(<Navigation />);
    done();
  });
  it('should test the toggle method', (done) => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.state().isOpen).toEqual(false);
    const button = wrapper.find('Header').shallow().find('#icon').first();
    expect(button.length).toBe(1);
    button.simulate('click');
    expect(Navigation.prototype.toggle.called).toBe(true);
    expect(wrapper.state().isOpen).toEqual(true);
    done();
  });
});
