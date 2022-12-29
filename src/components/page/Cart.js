import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { AddCartProduct } from './AddCartProduct'
import { useSelector } from 'react-redux'

export const Cart = () => {

const cart = useSelector((state)=> state.cart.cart)



  return (
    <div className='container mx-auto'>
    <Navbar/>
  
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5 justify-center">
      {
       cart.map((product)=>(
    <AddCartProduct key={product._id} product={product}/>
  ))
}
      </div>
    </div>
  )
}
