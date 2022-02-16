import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import {AppStateType} from "./Redux/redux-store";


export const App = (state: AppStateType) => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer {...state.auth} />
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs'
                           element={<DialogsContainer/>}/>

                    <Route path='/profile/:userId'
                           element={<ProfileContainer/>}/>

                    <Route path='/users'
                           element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>

    );
}

