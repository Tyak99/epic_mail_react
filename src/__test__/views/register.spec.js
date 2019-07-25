import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Register } from '../../views/Register/Register';

const props = {
  register: () => {},
  handleInput: () => {},
  submit: () => {},
};
describe('component: Register', () => {
  let RegisterWrapper;
  let handleInput;
  let submitHandler;
  beforeEach(() => {
    RegisterWrapper = shallow(<Register {...props} />);
    handleInput = sinon.spy(RegisterWrapper.instance(), 'handleInput');
    submitHandler = sinon.spy(RegisterWrapper.instance(), 'submitHandler');
    RegisterWrapper.instance().forceUpdate();
  });
  it('should render correctly', (done) => {
    const wrapper = shallow(<Register {...props} />);
    expect(wrapper).toMatchSnapshot();
    done();
  });
  it('should render correctly when token is passed along', (done) => {
    const wrapper = shallow(<Register {...props} token="hgahgs" />);
    expect(wrapper).toMatchSnapshot();
    done();
  });
  it('should call the input handler when email input changes', (done) => {
    const inputField = RegisterWrapper.find('RegisterUi').shallow().find('FormGroup').first()
      .shallow()
      .find('#firstName');
    const event = { target: { name: 'firstName', value: 'Tunde' } };
    inputField.simulate('change', event);
    expect(inputField.length).toBe(1);
    expect(RegisterWrapper.state().firstName).toEqual('Tunde');
    expect(handleInput.called).toBe(true);
    done();
  });
  it('should call the submit handler when submit is clicked', (done) => {
    const form = RegisterWrapper.find('RegisterUi').shallow().find('form');
    const event = { preventDefault: () => {} };
    form.simulate('submit', event);
    expect(form.length).toBe(1);
    expect(submitHandler.called).toBe(true);
    done();
  });
});
