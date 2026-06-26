import { useState } from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import styles from "./App.module.css"


function App() {
  return (
  
    <div className={styles[`page-container`]}>
      <h1>App</h1>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
