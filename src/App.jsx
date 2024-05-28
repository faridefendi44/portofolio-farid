import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom'
// import './App.css'
import Home from './page/about'
import Portofolio from './page/portofolio'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="App">
    <Navbar/>
    <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route path='/portofolio' element={<Portofolio/>}/>
    </Routes>
   </div>
  )
}

export default App
