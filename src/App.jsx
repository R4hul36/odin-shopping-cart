import { useState } from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import styles from "./App.module.css"


function App() {
  return (
    <div className={styles[`page-container`]}>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
