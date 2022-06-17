
import {  useFormik } from 'formik'
import validateSchema from './validations'

function SingUp() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
        email: "",
        password: "",
        confirmPassword:""
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validateSchema,
  })

  return (
    <div>
      <h1>Sing Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input name="email" value={values.email} onChange={handleChange} type="text" />
        <br />
        <br />
        <label htmlFor="password">password</label>
        <input name="password" value={values.password} onChange={handleChange} type="text" />
        <br />
        <br />
        <label htmlFor="confirmPassword">confirmPassword</label>
        <input name="confirmPassword" value={values.confirmPassword} onChange={handleChange} type="text" />
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        {JSON.stringify(values)}
      </form>
    </div>
  )
}

export default SingUp
