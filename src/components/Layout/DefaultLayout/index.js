import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function DefaultLayout({ children }) {
  return (
    <div className="container-fluid">
        <Header />
        <div className="">
          <Sidebar />  
          <div className="content">
            { children }
          </div>
        </div>
    </div>
  )
}

export default DefaultLayout