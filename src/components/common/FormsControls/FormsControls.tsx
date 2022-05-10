import { Field } from 'redux-form'
import style from './FormControls.module.css'



const FormControl = ({ input, meta, child, ...props }: any) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
      <div>
        {props.children}
      </div>
      <div>
        {hasError && <span>{meta.error}</span>}
      </div>

    </div>
  )
}

export const Textarea = (props: any) => {
  const { input, meta, child, ...restProps } = props
  return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}


export const Input = (props: any) => {
  const { input, meta, child, ...restProps } = props

  return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder: string, name: string, validators: Function[], component: Function, text: string, props: any) => {
  return (
    <div>
      <Field
        validate={validators}
        placeholder={placeholder}
        name={name}
        component={component}
        {...props}
        />
        <span>{text}</span>
    </div>
    
  )
}