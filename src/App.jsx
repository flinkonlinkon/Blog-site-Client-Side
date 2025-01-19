import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar></NavBar>
     <Outlet></Outlet>
     
     <Footer></Footer>
    </>
  )
}

export default App
