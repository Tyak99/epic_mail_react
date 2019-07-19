import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Header from '../../components/Header/Header';

describe('component: Header', () => {
  beforeEach(() => {
    sinon.spy(Header.prototype, 'toggle');
  });
  afterEach(() => {
    Header.prototype.toggle.restore();
  });
  it('should render correctly', (done) => {
    const wrapper = shallow(<Header />);
    expect(wrapper.state().isOpen).toBe(false);
    done();
  });
  it('should test the toggle header method', (done) => {
    const wrapper = shallow(<Header />);
    expect(Header.prototype.toggle.called).toBe(false);
    const navToggler = wrapper.find('#navToggler');
    expect(navToggler.length).toBe(1);
    navToggler.simulate('click');
    expect(Header.prototype.toggle.calledOnce).toBe(true);
    expect(wrapper.state().isOpen).toBe(true);
    done();
  });
});
