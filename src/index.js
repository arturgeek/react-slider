import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import rootReducer from './Reducers/rootReducer';

import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const AddNewSlider = ( containerID, interval ) => {

  const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const copmposedEnhancers = composeAlt( 
    applyMiddleware(thunk),
  );

  const store = createStore( rootReducer, copmposedEnhancers );
  const slider = ReactDOM.createRoot(document.getElementById(containerID));
  slider.render(
    <React.StrictMode>
      <Provider store={store}>
        <App secondsInterval={interval} />
      </Provider>
    </React.StrictMode>
  );
}

[1,2,3,4,5,6].forEach( number => {
  const maximum = 10;
  const minimum = 2;
  
  const interval = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  const slider = `slider${number}`;
  AddNewSlider(slider, interval)
});