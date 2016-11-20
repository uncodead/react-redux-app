import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers/index'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//*@ App *//
import App from './App';
//*@ Css *//
import './index.css';

const store = createStore(reducers);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
};

store.subscribe(render);
render();
