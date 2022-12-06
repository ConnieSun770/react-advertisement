import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { getUserBalance } from 'store/index/actions';
import App from './App';
import RouteComponent from './routes';
import 'antd/dist/antd.css';
import './assets/styles/iconfont.scss';
import reducer from './store/reducers';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

store.dispatch(getUserBalance());

ReactDOM.render(
  <Provider store={store}>
    <RouteComponent />
  </Provider>,
  document.getElementById('root'),
);
