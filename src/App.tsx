import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import {AppStateType} from "./Redux/redux-store";
import {Login} from './components/Login/Login';


export const App = (state: AppStateType) => {

	return (
		<div className='app-wrapper'>
			<HeaderContainer {...state.auth} />
			<Navbar/>
			<div className='app-wrapper-content'>
				<Routes>
					<Route path='/dialogs' element={<DialogsContainer/>}/>

					<Route path='/profile/' element={<ProfileContainer/>}/>

					<Route path='/users' element={<UsersContainer/>}/>

					<Route path='/login' element={<Login/>}/>

					{/*<Route path={'/404'} element={<h1 style={{textAlign: 'center'}}>404 not found</h1>}/>*/}

					{/*<Route path='*' element={<Navigate to={'/404'}/>}/>*/}

				</Routes>
			</div>
		</div>

	);
}

