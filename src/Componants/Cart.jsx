import React, { useEffect, useState } from 'react'

import './Cart.css'
const Cart = ({cart,setCart}) => {

  const[price,setPrice]=useState(0)

  function handlePrice(){
    let ans = 0
    cart.map((item)=>ans+=item.price*item.amount)
    setPrice(ans)
  }

  useEffect(()=>{
    handlePrice()
  })

  function handleRemove(id){
    const del = cart.filter((item)=>item.id!==id)
    setCart(del)
  }

  function handleIncre(id){
    const addData=cart.map((item)=>{
      if(item.id===id){
        return{...item,amount:item.amount+1}
      }
      return item
    })
    setCart(addData)
  }
  function handleDecre(id){
    const subData=cart.map((item)=>{
      if(item.id===id){
        const newAmount = Math.max(0, item.amount - 1);
        return{...item,amount:newAmount}
      }
      return item
    })
    setCart(subData)
  }

  return (
    <div className='Cart'>
      <table width={'100%'} border={'1'} rules='all'>
        <thead>
          <tr>
            <td><b>Image</b></td>
            <td><b>Name</b></td>
            <td><b>Price</b></td>
            <td><b>Incre</b></td>
            <td><b>Qty</b></td>
            <td><b>Decre</b></td>
            <td><b>Remove</b></td>
          </tr>
        </thead>
        <tbody>
          {cart.map((item)=>{
            return(
              <tr key={item.id}>
                <td><img src={item.image} height={'100px'} width={'100px'}></img></td>
                <td><h1>{item.title}</h1></td>
                <td>{item.price}</td>
                <td><button onClick={()=>handleIncre(item.id)}>+</button></td>
                <td>{item.amount}</td>
                <td><button onClick={()=>handleDecre(item.id)}>-</button></td>
                <td><button onClick={()=>handleRemove(item.id)}>Remove</button></td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>Total Price</td>
            <td colSpan={5}>{price}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Cart
