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