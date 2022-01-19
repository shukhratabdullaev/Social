import reportWebVitals from './reportWebVitals';
import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './redux/redux-store';

ReactDOM.render(
    <BrowserRouter basename={'Social'}>
        <Provider store={store}>
            <App dialogsPage={store.getState().dialogsPage}
                 profilePage={store.getState().profilePage}
                 sidebar={store.getState().sidebar}
                 usersPage={store.getState().usersPage}
            />
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
