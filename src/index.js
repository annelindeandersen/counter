import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// connect redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// reducers
import counter from './reducers/counter';
import text from './reducers/text';
import results from './reducers/result';

const rootReducer = combineReducers({
    countRed: counter,
    textRed: text,
    resRed: results
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
