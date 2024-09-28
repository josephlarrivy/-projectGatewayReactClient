import { useNavigate } from "react-router-dom";



const DevNavbar = () => {

  const navigateTo = useNavigate()

  return (
    <div>
      <p>DevNavbar</p>
      <button onClick={() => navigateTo('/')}>home</button>
      <button onClick={() => navigateTo('/register')}>register</button>
      <button onClick={() => navigateTo('/enterLoginCode')}>enter login code</button>
      <br />
      <br />
      <hr/>
    </div>
  )
}

export default DevNavbar;