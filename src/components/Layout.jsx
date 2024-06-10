import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import TopLeftImage from './TopLeftImage'


const Layout = ({children}) => {
  return (
    <div className= '    text-white'>
      <TopLeftImage/>
      <Navbar/>
      <Header/>
      {children}
    </div>
  )
}

export default Layout