import React, { Component, ComponentType } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import { WithRouter } from './components/common/WithRouter/WithRouter';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';
import { Navbar } from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './Redux/app-reducer';
import { AppStateType } from './Redux/redux-store';


class App extends Component<AppPropsType> {

	componentDidMount() {
		this.props.initializeApp()
	}

	render() {

		if (!this.props.initialized) {
			return <Preloader />
		}

		return (
			<div className='app-wrapper'>
				<HeaderContainer />
				<Navbar />
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/dialogs' element={<DialogsContainer />} />

						<Route path='/profile/' element={<ProfileContainer />} />

						<Route path='/users' element={<UsersContainer />} />

						<Route path='/login' element={<Login />} />

						{/*<Route path={'/404'} element={<h1 style={{textAlign: 'center'}}>404 not found</h1>}/>*/}

						{/*<Route path='*' element={<Navigate to={'/404'}/>}/>*/}

					</Routes>
				</div>
			</div>

		);
	}

}




const mapStateToProps = (state: AppStateType) => ({
	initialized: state.app.initialized
})

export default compose<ComponentType>(
	WithRouter,
	connect(mapStateToProps, { initializeApp }),
)(App)








type AppPropsType = mapDispatchToPropsType & mapStateToPropsType



type mapDispatchToPropsType = {
	initializeApp: () => void
}

type mapStateToPropsType = {
	initialized: boolean
}

