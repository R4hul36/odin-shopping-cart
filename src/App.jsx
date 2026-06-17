import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router'

function App() {
  return <>
    <h1>Shopping Cart</h1>
    <Outlet />

  </>
}

export default App
