import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, UserDataType} from "../../Redux/auth-reducer";


class HeaderContainer extends React.Component<UserDataPropsType, UserDataType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })

            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            });
    }


    render() {
        return <Header {...this.props}/>
    }
}




type MapStateToPropsType = UserDataType

type MapDispatchToPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}

type UserDataPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: MapStateToPropsType) => ({
    isAuth: state.isAuth,
    login: state.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)