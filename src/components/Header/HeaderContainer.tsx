import React from "react";
import { connect } from "react-redux";
import { getAuthUserData, logout, UserDataType } from "../../Redux/auth-reducer";
import { AppStateType } from "../../Redux/redux-store";
import { Header } from "./Header";


class HeaderContainer extends React.Component<UserDataPropsType, UserDataType> {
	componentDidMount() {
		this.props.getAuthUserData()
	}


	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = (state: AppStateType) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
})

export default connect(mapStateToProps,
	{ getAuthUserData, logout })(HeaderContainer)




type MapStateToPropsType = UserDataType

type MapDispatchToPropsType = {
	getAuthUserData: () => void
	logout: () => void
}

export type UserDataPropsType = MapStateToPropsType & MapDispatchToPropsType


