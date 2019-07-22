import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import thunk from 'redux-thunk';
import { Compose } from '../../views/Compose/Compose';
import { sendMessageSuccess, sendMessageFailed, sendMessage } from '../../../store/actions/messageAction';
import messageReducer, { initialState } from '../../../store/reducer/messageReducer';


const props = {
  error: '',
  isLoading: false,
  sendMessage: () => {},
};

describe('component: Compose', () => {
  it('should render correctly', (done) => {
    shallow(<Compose {...props} />);
    done();
  });
//   it('should render the compose form component', (done) => {
//     const wrapper = shallow(<Compose {...props} />);
//     expect(wrapper.find('ComposeForm').shallow()).toBe(true);
//     done();
//   });
});

describe('Compose Form', () => {
  let wrapper;
  let inputHandler;
  let submitHandler;
  const mockEvent = { target: { name: 'email', value: 'email' } };
  beforeEach(() => {
    wrapper = shallow(<Compose {...props} />);
    inputHandler = sinon.spy(wrapper.instance(), 'handleInput');
    submitHandler = sinon.spy(wrapper.instance(), 'submitHandler');
    wrapper.instance().forceUpdate();
  });
  it('should call the handleInput method when the input is updated', (done) => {
    const emailInput = wrapper.find('ComposeForm').shallow().find('.email-to');
    expect(emailInput.length).toBe(1);
    emailInput.simulate('change', mockEvent);
    expect(inputHandler.called).toBe(true);
    done();
  });
  it('should call the submit handler when the send button is clicked', (done) => {
    const sendButton = wrapper.find('ComposeForm').shallow().find('#btn-send');
    expect(sendButton.length).toBe(1);
    sendButton.simulate('click');
    expect(submitHandler.called).toBe(true);
    done();
  });
});

describe('send message actions', () => {
  const mockStore = configureMockStore();
  const store = mockStore({});
  it('dispatches send message success when message sent', (done) => {
    store.dispatch(sendMessageSuccess());
    expect(store.getActions()).toMatchSnapshot();
    done();
  });
  it('dispatches send message faled when message fails', (done) => {
    store.dispatch(sendMessageFailed('Invalid email'));
    expect(store.getActions()).toMatchSnapshot();
    done();
  });
});

describe('send message async actions', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const mockData = {
    emailTo: 'tunde@mail.com',
    subject: 'Hello',
    message: 'Please save me',
  };
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  afterEach(() => {
    nock.cleanAll();
  });
  it('sends message successfully', (done) => {
    nock('https://intense-thicket-60071.herokuapp.com/api/v1')
      .post('/messages')
      .reply(201, {});
    return store.dispatch(sendMessage(mockData)).then(() => {
      expect(store.getActions()).toMatchSnapshot();
      done();
    });
  });
  it('calls send message failed', (done) => {
    nock('https://intense-thicket-60071.herokuapp.com/api/v1')
      .post('/messages')
      .reply(422, {});
    return store.dispatch(sendMessage({ emailTo: 'tunde@mail.com' })).then(() => {
      expect(store.getActions()).toMatchSnapshot();
      done();
    });
  });
});

describe('message reducer', () => {
  it('should return the initial state', (done) => {
    expect(messageReducer(undefined, {})).toMatchSnapshot();
    done();
  });
  it('should update the state on sendMessage start', (done) => {
    expect(messageReducer(initialState, { type: 'SEND_MESSAGE_START' })).toMatchSnapshot();
    done();
  });
  it('should update the state on sendMessage success', (done) => {
    expect(messageReducer(initialState, { type: 'SEND_MESSAGE_SUCCESS' })).toMatchSnapshot();
    done();
  });
  it('should update the state on sendMessage failed', (done) => {
    expect(messageReducer(initialState, { type: 'SEND_MESSAGE_FAILED' })).toMatchSnapshot();
    done();
  });
});
