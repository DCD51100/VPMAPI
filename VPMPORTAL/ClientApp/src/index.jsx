import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';

import Template from './template';
import userReducer from './_reducers';

const store = createStore(
    userReducer,
);

ReactDOM.render(
    <Provider store={store} >
      <Template />
    </Provider>,
    document.getElementById('app')
)
registerServiceWorker();
