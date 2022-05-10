import React from 'react'
import { connect, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { compose } from 'redux'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { login } from '../../Redux/auth-reducer'
import { AppStateType } from '../../Redux/redux-store'
import { Required } from '../../utils/validator/Validators'
import { createField, Input } from '../common/FormsControls/FormsControls'
import style from './../common/FormsControls/FormControls.module.css'




const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({ handleSubmit, error }) => {
	return (
		<>
			<form onSubmit={handleSubmit}>
				{createField('Email', 'email', [Required], Input, '', {type: 'email'})}
				{createField('Password', 'password', [Required], Input, '', { type: 'password' })}
				{createField('', 'rememberMe', [], Input, 'remember me', { type: 'checkbox' })}

				{error &&
					<div className={style.formSummaryError}>
						{error}
					</div>
				}
				<div>
					<button>Login</button>
				</div>
			</form>
		</>
	)
}

const LoginReduxForm = reduxForm<FormDataType>({ form: 'login' })(LoginForm)


export const Login = (props: LoginPropsType) => {

	const isAuth = useSelector<AppStateType>(state => state.auth.isAuth)

	const onSubmit = (formData: FormDataType) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	}

	if (isAuth) {
		return <Navigate to={'/profile'} />
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

// export default connect(null, { login })(Login)

export default compose<React.ComponentType>(
	connect<mapDispatchToPropsType>(null, { login }),
)(Login)



type LoginPropsType = {
	login: (email: string, password: string, rememberMe: boolean) => null
}


type FormDataType = {
	email: string
	password: string
	rememberMe: boolean
}

type mapDispatchToPropsType = {
	login: (email: string, password: string, rememberMe: boolean) => void
}
