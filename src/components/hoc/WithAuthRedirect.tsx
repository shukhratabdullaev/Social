import {Navigate} from "react-router-dom"
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {ComponentType} from "react";


let mapStateToPropsForRedirect = (state: AppStateType): mapStateToPropsForRedirectType => ({
	isAuth: state.auth.isAuth,
});

export function WithAuthRedirect <T>(Component: ComponentType<T>) {

	const RedirectComponent = (props: mapStateToPropsForRedirectType) => {


		let {isAuth, ...restProps} = props
		if (!isAuth) return <Navigate to={'/login'}/>

		return <Component {...restProps as T} />
	}


	let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

	return ConnectedAuthRedirectComponent
}



type mapStateToPropsForRedirectType = {
	isAuth: boolean
}