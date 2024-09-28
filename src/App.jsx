import { BrowserRouter } from 'react-router-dom'
import '../src/styles/App.css'
import DevNavbar from './common/DevNavbar'
import Router from '../src/utilities/Router'

function App() {

  return (
    <BrowserRouter>
      <DevNavbar />
      <Router />
    </BrowserRouter>
  )
}

export default App
