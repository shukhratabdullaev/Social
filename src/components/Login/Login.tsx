import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Required } from '../../utils/validator/Validators'
import { Input } from '../common/FormsControls/FormsControls'




const LoginForm = (props: any) => {
	return (
		<>
			<form onSubmit={props.handleSubmit}>
				<div>
					<Field
						validate={[Required]}
						placeholder={'Login'}
						name={'login'}
						component={Input} />
				</div>
				<div>
					<Field
						validate={[Required]}
						placeholder={'Password'}
						name={'password'}
						component={Input} />
				</div>
				<div>
					<Field
						type={'checkbox'}
						name={'remember me'}
						component={Input} />remember me
				</div>
				<div>
					<button>Login</button>
				</div>
			</form>
		</>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)


export const Login = (props: any) => {

	const onSubmit = (formData: any) => {
		console.log(formData);

	}



	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}
