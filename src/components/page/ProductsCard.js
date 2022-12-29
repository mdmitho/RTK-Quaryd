import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../app/feature/cart/cartSlice';

export const ProductsCard = ({product}) => {
    const { name, img, price, description,rating, id, quantity} = product;
    const dispatch = useDispatch()
    
  return (
    <>
    <div className="card  bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title my-3">NAME : {name}</h2>
        <h2 className="card-title my-3">PRICE : ${price}</h2>
    <h2 className="card-title my-3">Rating : {rating}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end my-3">
      <button 
      onClick={()=> dispatch(addToCart(product))} 
      className="btn btn-primary">ADD TO CARAT</button>
    </div>
  </div>
</div>
    
    </>
  )
}
