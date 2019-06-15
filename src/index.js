import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store1 from './store1/store.js';

import './index.css';
import 'antd/dist/antd.css'; 
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Provider store={store1}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
