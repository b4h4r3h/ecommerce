import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getAllProducts } from './api/products'
import { RouterProvider } from 'react-router-dom'
import { router } from './route/route'

function App() {
  const [count, setCount] = useState(0)
  // useEffect(() => {
  //   getAllProducts()
  // },[])
  return <RouterProvider router={router}/>
}

export default App
