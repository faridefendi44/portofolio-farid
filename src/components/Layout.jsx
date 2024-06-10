import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import TopLeftImage from './TopLeftImage'


const Layout = ({children}) => {
  return (
    <div className= 'page bg-site bg-cover bg-no-repeat text-white'>
      <TopLeftImage/>
      <Navbar/>
      <Header/>
      {children}
    </div>
  )
}

export default Layout