import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import TopLeftImage from './TopLeftImage'
import Bulb from './Bulb'
import Circles from './Circles'



const Layout = ({children}) => {
  return (
    <div className= '    text-white'>
      <TopLeftImage/>
      <Bulb/>
      <Circles/>
      <Navbar/>
      <Header/>
      {children}
    </div>
  )
}

export default Layout