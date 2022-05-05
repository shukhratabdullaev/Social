import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { logout, UserDataType } from "../../Redux/auth-reducer";
import { AppStateType } from "../../Redux/redux-store";
import { Header } from "./Header";


class HeaderContainer extends React.Component<UserDataPropsType> {

	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = (state: AppStateType) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
})


export default compose<ComponentType>(
	connect(mapStateToProps, { logout })
)(HeaderContainer)

type MapStateToPropsType = UserDataType

type MapDispatchToPropsType = {
	logout: () => void
}

export type UserDataPropsType = MapStateToPropsType & MapDispatchToPropsType


