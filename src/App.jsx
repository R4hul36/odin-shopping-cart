import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import styles from "./App.module.css"


function App() {
  const [shopData, setShopData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [cartItems, setCartItems] = useState([])

  const handleCart = (product) => {
    console.log(product);
    
      setCartItems((prevItems) => {
        const isNewProduct = prevItems.filter(item => item.id === product.id)

        if(isNewProduct.length === 0) {
          return [...prevItems, product]
        }
        
        return prevItems.map(item => {
          //console.log(item)
          if(item.id === product.id) {
            let newCount = item.productCount + product.productCount
            return {...item, productCount: newCount}
          }
          return item 
         
        })
    
      })
  }
  // console.log(cartItems)
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
        //console.log(data)
      } catch (error) {
        setError(error.message)
      }finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
  
    <div className={styles[`page-container`]}>
      <Navbar />
      <Outlet context={{shopData, loading, error, cartItems, handleCart}}/>
    </div>
  )
}

export default App
