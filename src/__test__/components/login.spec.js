import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Login } from '../../views/Login/Login';

const props = {
  onSubmit: () => {},
  isLoading: false,
  token: 'token',
  error: null,
};
describe('component: Login', () => {
  let LoginWrappper;
  let inputHandler;
  beforeEach(() => {
    LoginWrappper = shallow(<Login {...props} />);
    inputHandler = sinon.spy(LoginWrappper.instance(), 'inputHandler');
    LoginWrappper.instance().forceUpdate();
  });
  it('renders correctly', (done) => {
    shallow(<Login {...props} />);
    done();
  });
  it('should call the input handler when email input changes', (done) => {
    const emailInput = LoginWrappper.find('LoginUi').shallow().find('#email');
    const event = { target: { name: 'email', value: 'Tunde' } };
    emailInput.simulate('change', event);
    expect(emailInput.length).toBe(1);
    expect(LoginWrappper.state().email).toEqual('Tunde');
    expect(inputHandler.called).toBe(true);
    done();
  });
  it('should call submit handler when form is submitted', (done) => {
    const spy = sinon.spy(LoginWrappper.instance(), 'submitHandler');
    // update the instance with the new spy
    LoginWrappper.instance().forceUpdate();
    const form = LoginWrappper.find('LoginUi').shallow().find('form');
    const event = { preventDefault: () => {} };
    form.simulate('submit', event);
    expect(form.length).toBe(1);
    expect(spy.called).toBe(true);
    done();
  });
  it('should call the input handler when password input changes', (done) => {
    const passwordInput = LoginWrappper.find('LoginUi').shallow().find('#password');
    const event = { target: { name: 'password', value: 'secret' } };
    passwordInput.simulate('change', event);
    expect(passwordInput.length).toBe(1);
    expect(LoginWrappper.state().password).toEqual('secret');
    expect(inputHandler.called).toBe(true);
    done();
  });
});
