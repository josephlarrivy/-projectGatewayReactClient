import { useState } from "react";
import AuthenticationApi from "../utilities/API/AuthenticationApi";





const EnterLoginCode = () => {

  const [loginCode, setLoginCode] = useState(null)

  const AuthenticationApiRequest = new AuthenticationApi()

  const handleChange = (e) => {
    setLoginCode(e.target.value)
  }

  const handleCodeSubmit = async () => {
    const response = await AuthenticationApiRequest.checkLoginCode(loginCode);

    console.log(response.status)
    if (response.status == 403) {
      console.warn('403')
    } else if (response.status == 200) {
      console.warn('200')
    } else {
      console.warn(response)
    }
  };



  return (
    <div>
      <h1>enter login code</h1>
      <label htmlFor="loginCode">
        <input
          id='loginCode'
          type='text'
          onChange={(e) => handleChange(e)}
        >
        </input>
      </label>
      <button onClick={() => handleCodeSubmit()}>Submit</button>
    </div>
  )
}

export default EnterLoginCode;