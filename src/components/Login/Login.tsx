import React from 'react'
import { connect, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { compose } from 'redux'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { login } from '../../Redux/auth-reducer'
import { AppStateType } from '../../Redux/redux-store'
import { Required } from '../../utils/validator/Validators'
import { Input } from '../common/FormsControls/FormsControls'




const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
	return (
		<>
			<form onSubmit={props.handleSubmit}>
				<div>
					<Field
						validate={[Required]}
						placeholder={'Login'}
						name={'email'}
						component={Input} />
				</div>
				<div>
					<Field
						validate={[Required]}
						type={'password'}
						placeholder={'Password'}
						name={'password'}
						component={Input} />
				</div>
				<div>
					<Field
						type={'checkbox'}
						name={'rememberMe'}
						component={Input} />remember me
				</div>
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
		return <Navigate to={'/profile'}/>
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
