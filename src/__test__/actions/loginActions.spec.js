import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import {
  authSuccess, authFailed, login, checkAuth,
} from '../../../store/actions/auth';
import authReducer from '../../../store/reducer/auth';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


const mockData = {
  name: 'Tunde',
  token: 'token',
};

const initialState = {
  data: {},
  error: null,
  isLoading: false,
  isAuthenticated: false,
};
describe('test authentication actions', () => {
  const store = mockStore({});
  it('should call authSuccess when the action is dispatched', (done) => {
    store.dispatch(authSuccess(mockData));
    expect(store.getActions()).toMatchSnapshot();
    done();
  });
  it('should call authFailed when the action is dispatched', (done) => {
    store.dispatch(authFailed({ error: 'sorry' }));
    expect(store.getActions()).toMatchSnapshot();
    done();
  });
});

describe('test async actions', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  afterEach(() => {
    // clear all HTTP mocks after each test
    nock.cleanAll();
  });
  it('creates authSuccess when login is done', (done) => {
    nock('https://intense-thicket-60071.herokuapp.com/api/v1/auth')
      .post('/login')
      .reply(200, {
        data: {
          name: 'Tunde',
          token: 'secret',
        },
      });
    store.dispatch(login({ email: 'tunde@mail.com', password: 'secret' })).then(() => {
      expect(store.getActions()).toMatchSnapshot();
      done();
    });
  });
  it('creates authSuccess when login is done', (done) => {
    nock('https://intense-thicket-60071.herokuapp.com/api/v1/auth')
      .post('/login')
      .reply(404, {
        error: 'invalid password',
      });
    store.dispatch(login({ email: 'tunde@mail.com' })).then(() => {
      expect(store.getActions()).toMatchSnapshot();
      done();
    });
  });
  it('should test checkAuth', (done) => {
    store.dispatch(checkAuth);
    expect(store.getActions()).toMatchSnapshot();
    done();
  });
});

describe('test reducers', () => {
  it('should return initialState', (done) => {
    expect(authReducer(undefined, {})).toEqual(initialState);
    done();
  });
  it('should update the state when loginSucces is called', (done) => {
    const action = authSuccess(mockData);
    expect(authReducer(initialState, action)).toMatchSnapshot();
    done();
  });
  it('should update the state when authFailed is called', (done) => {
    const action = authFailed({ error: 'invalid password' });
    expect(authReducer(initialState, action)).toMatchSnapshot();
    done();
  });
});
