import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import rootReducer from './Reducers/rootReducer';

import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const copmposedEnhancers = composeAlt( 
  applyMiddleware(thunk),
);

const store1 = createStore( rootReducer, copmposedEnhancers );
const slider1 = ReactDOM.createRoot(document.getElementById('slider1'));
slider1.render(
  <React.StrictMode>
    <Provider store={store1}>
      <App secondsInterval={10} />
    </Provider>
  </React.StrictMode>
);

const store2 = createStore( rootReducer, copmposedEnhancers );
const slider2 = ReactDOM.createRoot(document.getElementById('slider2'));
slider2.render(
  <React.StrictMode>
    <Provider store={store2}>
      <App secondsInterval={2} />
    </Provider>
  </React.StrictMode>
);