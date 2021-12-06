import reportWebVitals from './reportWebVitals';
import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import { store } from './redux/redux-store';

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                newMessage={store.getState().dialogsPage.newMessage}
                store={store}
                message={store.getState().profilePage.messageForNewPost}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}


store.subscribe(() => {
    rerenderEntireTree()
})
rerenderEntireTree()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
