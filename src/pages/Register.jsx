import { useEffect, useState } from "react";
import AuthenticationApi from "../utilities/API/AuthenticationApi";
import { useNavigate } from "react-router-dom";



const Register = () => {
  
  const [registerData, setRegisterData] = useState({})

  const AuthenticationApiRequest = new AuthenticationApi()
  const navigateTo = useNavigate()

  const handleInputChange = (key, e) => {
    setRegisterData({...registerData, [key] : e.target.value})
  }

  const submit = async () => {
    console.log(registerData)

    const response = await AuthenticationApiRequest.registerNewUser(registerData)

    if (response.status == 409) {
      console.log('user already registered')
    } else if (response.status == 200) {
      console.log('new user registered')
      navigateTo('/enterLoginCode')
    } else {
      console.error(response)
    }

  }

  // useEffect(() => {
  //   console.log(registerData)
  // }, [registerData])

  return (
    <div>
      <h1>register</h1>

      <label htmlFor='firstName'>
        First Name:
        <input
          id='firstName'
          type='text'
          onChange={(e) => handleInputChange('firstName', e)}>
        </input>
      </label>
      <br />
      <label htmlFor='lastName'>
        Last Name:
        <input
          id='lastName'
          type='text'
          onChange={(e) => handleInputChange('lastName', e)}>
        </input>
      </label>
      <br />
      <label htmlFor='email'>
        Email:
        <input
          id='email'
          type='text'
          onChange={(e) => handleInputChange('email', e)}>
        </input>
      </label>
      <br />
      <label htmlFor='password'>
        Password:
        <input
          id='password'
          type='text'
          onChange={(e) => handleInputChange('password', e)}>
        </input>
      </label>
      <br />
      <br />
      <button onClick={() => submit()}>Submit</button>

    </div>
  )
}

export default Register;