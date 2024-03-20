import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>React - useContext hook - ContextAPI </h1>
    </UserContextProvider>
  )
}

export default App
