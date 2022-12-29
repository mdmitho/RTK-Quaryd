import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='col-span-2 text-white bg-accent h-[calc(100vh-25px)] p-5 rounded-lg'>
      <ul className='flex gap-3  flex-col h-full'>
        <li>
          <Link to='/dashboard'>Product List</Link>
        </li>
        <li>
          <Link to='add-product'> Add Product </Link>
        </li>
        <li className='mt-auto'>
          <Link to='/'> Back to Home </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;