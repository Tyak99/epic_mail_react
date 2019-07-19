import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faInbox,
  faAngleDoubleUp,
  faBox,
  faThLarge,
  faPlus,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import App from './App';
import store from '../store/index';
// import 'bootstrap/dist/css/bootstrap.min.css?raw';

library.add(faInbox, faAngleDoubleUp, faBox, faThLarge, faPlus, faPaperPlane);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
