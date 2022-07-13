import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import styles from './DefaultLayout.module.scss'

function DefaultLayout({ children }) {
  return (
    <div className="">
        <Header />
        <div className={styles.container}>
          <Sidebar />  
          <div className={styles.content}>
            { children }
          </div>
        </div>
    </div>
  )
}

export default DefaultLayout