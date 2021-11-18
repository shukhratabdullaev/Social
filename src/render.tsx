import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {addPost, RootStateType} from './Redux/state';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes} from 'react-router-dom';
import App from './App';

export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
            <BrowserRouter>
                <App state={state} addPost={addPost}/>
            </BrowserRouter>, document.getElementById('root')
    );
}


