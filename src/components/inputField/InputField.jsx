const InputField = ({ classes, type, value, placeholder }) => {
  return (
    <input className={classes} type={type} value={value} placeholder={placeholder} />
  )
}

export default InputField
