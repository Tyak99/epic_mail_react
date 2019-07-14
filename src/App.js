import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import Routes from './routes/routes';

library.add(faMailBulk);
const App = () => <Routes />;

export default App;
