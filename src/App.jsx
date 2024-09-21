import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {

  const doTestRequest = async () => {
    try {
      const response = await axios.get('http://localhost:3000/data/test/testGateway')
      console.log(response)
    } catch (error) {
      console.error("Error making the request", error)
    }
  }

  useEffect(() => {
    doTestRequest()
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default App
