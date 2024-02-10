import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
const Card = ({item,handleClick}) => {
    const {title,price,image,rating,description}=item
  return (
    <div className='Card'>
      
   <Link to={`/About/${item.id}`}> <img src={image} height={'250px'} width={'250px'}></img></Link>
    <p>{title}</p>
    <p>{price}</p>
    <p>{rating.rate}</p>
    <button className='Btn' onClick={()=>handleClick(item)}>Add Cart</button>
   
    </div>
  )
}

export default Card
