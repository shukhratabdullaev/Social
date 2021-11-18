import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route, Routes, Link} from 'react-router-dom';
import {addPost, RootStateType} from './Redux/state';

type AppPropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
}

const App = (props: AppPropsType) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs'
                           element={<Dialogs dialogs={props.state.dialogsPage.dialogs}
                                             messages={props.state.dialogsPage.messages}/>}/>
                    <Route path='/profile'
                           element={<Profile posts={props.state.profilePage.posts}
                                             addPost={props.addPost}/>}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
