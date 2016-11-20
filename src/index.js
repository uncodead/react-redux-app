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

//store.dispatch({type:'ADD_TODO', id:1, text:'Teste'});
//store.dispatch({type:'SET_VISIBILITY_FILTER', filter:'SHOW_COMPLETED'})
console.log(store.getState())

store.subscribe(render);
render();
