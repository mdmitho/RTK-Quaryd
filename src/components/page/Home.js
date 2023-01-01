import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { toggle, toggleBrands } from "../../app/feature/filter/filterSlice";
// import { getProducts } from "../../app/product/productSlice";
import { Cart } from "./Cart";
import Navbar from "./Navbar";
import { ProductsCard } from "./ProductsCard";

export const Home = () => {
const filter = useSelector((state)=> state.filter)
// const {products,isLoading} = useSelector((state)=> state.products)
const {brands, stock} = filter
const dispatch = useDispatch()

const [products, setProducts] = useState([]);

useEffect(() => {
  fetch("http://localhost:5000/products")
    .then((res) => res.json())
    .then((data) => setProducts(data));
}, []);
  const activeClass = "text-white  bg-accent border-white";


let content;

// if(isLoading){
//   content = <p className="text-center">Loading........</p>
// }

if(products.length){
 content = products.map((product)=>(
    <ProductsCard key={product._id} product={product}/>
  ))
}
if(products.length && (filter.stock || filter.brands)){
 content = products
 .filter((product)=>{
  if(stock){
    return  product.status === true;
  }
  return product
 })
 .filter((product)=>{

  if(filter.brands.length){
    return filter.brands.includes(product.brand);
  }
  return product
 })
 .map((product)=>(
    <ProductsCard key={product._id} product={product}/>
  ))
}


  return (
    <>
      <Navbar />

      <Outlet />


      <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
        onClick={ () => dispatch(toggle())}
        className={`border px-3 py-2 rounded-full font-semibold ${stock ? activeClass : null} `}
        >
          In Stock
        </button>
        <button 
        onClick={ () => dispatch(toggleBrands("Honda"))}
        className={`border px-3 py-2 rounded-full font-semibold ${brands.includes("Honda") ? activeClass : null}`}>
         Honda
        </button>
        <button
         onClick={ () => dispatch(toggleBrands("Galaxy"))} 
         className={`border px-3 py-2 rounded-full font-semibold ${brands.includes("Galaxy") ? activeClass : null}`}>
      Galaxy
        </button>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5 justify-center">
      {
 content
}
      </div>
    </div>

      
    </>
  );
};
