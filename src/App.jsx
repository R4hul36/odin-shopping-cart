import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import styles from "./App.module.css"


function App() {
  const [shopData, setShopData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if(!response.ok) {
          throw new Error("failed to fetch data!")
          console.log("ssdfsdfsdf");
          
        }
        const data = await response.json()
        setShopData(data)
        console.log(data)
      } catch (error) {
        setError(error.message)
        console.log("hiiiiii")
      }finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
  
    <div className={styles[`page-container`]}>
      <h1>App</h1>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
