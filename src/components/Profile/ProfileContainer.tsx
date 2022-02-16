import React from 'react';
import {ProfilePagePropsType} from './MyPosts/MyPostsContainer';
import {Profile, ProfilePageType} from "./Profile";
import axios from "axios";
import {AppStateType} from "../../Redux/redux-store";
import { connect } from 'react-redux';
import {setUserProfile} from "../../Redux/profile-reducer";





type MapStatePropsType = {
    profile: any
}

type MapDispatchPropsType = {
    setUserProfile: (profile: any) => void
}




class ProfileContainer extends React.Component<ProfilePageType, ProfilePagePropsType>{


    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)

            .then(response => {
                this.props.profile(response.data)
            });
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}



let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
});



export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {setUserProfile}) (ProfileContainer)