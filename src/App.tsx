import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {ActionsType, StoreType} from './redux/state';

type AppPropsType = {
    store: StoreType
    message: string
    dispatch: (action: ActionsType) => void
}

const App = (props: AppPropsType) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs'
                           element={<Dialogs dialogs={props.store.getState().dialogsPage.dialogs}
                                             messages={props.store.getState().dialogsPage.messages}/>}/>
                    <Route path='/profile'
                           element={<Profile message={props.message}
                                             posts={props.store.getState().profilePage.posts}
                                             dispatch={props.dispatch}
                           />}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
