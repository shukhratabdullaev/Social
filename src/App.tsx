import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Route, Routes} from 'react-router-dom';
import {AppStateType} from './redux/redux-store';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';


const App = (props: AppStateType) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/dialogs'}
                           element={<DialogsContainer/>}/>
                    <Route path={'/profile'}
                           element={<Profile
                               message={props.profilePage.messageForNewPost}
                               posts={props.profilePage.posts}/>}
                    />
                    <Route path={'/users'}
                           element={<UsersContainer />}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
