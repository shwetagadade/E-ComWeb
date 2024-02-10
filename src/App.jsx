
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Navbar from './Componants/Navbar'
import Home from './Componants/Home'
import Cart from './Componants/Cart'
import About from './Componants/About'
import Data from './Data'


import { useState } from 'react'

const App = () => {
  const[data,setData]=useState(Data)
  const[search,setSearch]=useState("")
  const[cart,setCart]=useState([])

  function handleClick(item){
    setCart([...cart,item])
  }

  return (
    <BrowserRouter>
      <Navbar cart={cart.length} setData={setData} setSearch={setSearch}/>
      <Routes>
        <Route path='/' element={<Home search={search} handleClick={handleClick} data={data}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route path='/about/:id' element={<About handleClick={handleClick} Data={data}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App