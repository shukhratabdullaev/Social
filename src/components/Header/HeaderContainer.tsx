import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, UserDataType} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";


class HeaderContainer extends React.Component<UserDataPropsType, UserDataType> {
	componentDidMount() {
		this.props.getAuthUserData()
	}


	render() {
		return <Header {...this.props}/>
	}
}

const mapStateToProps = (state: AppStateType) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
})

export default connect(mapStateToProps,
	{getAuthUserData})(HeaderContainer)




type MapStateToPropsType = UserDataType

type MapDispatchToPropsType = {
	getAuthUserData: () => void
}

type UserDataPropsType = MapStateToPropsType & MapDispatchToPropsType


