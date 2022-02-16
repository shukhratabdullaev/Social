import reportWebVitals from './reportWebVitals';
import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { store } from './Redux/redux-store';
import { App } from './App';

ReactDOM.render(
    <BrowserRouter basename={'social'}>
        <Provider store={store}>
            <App {...store.getState()}/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
