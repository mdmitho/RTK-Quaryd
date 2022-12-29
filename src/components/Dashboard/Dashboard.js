import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../page/Navbar'
import Sidebar from './Sidebar'

export const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <div className='grid grid-cols-12 p-3 gap-3 '>
    <Sidebar />
    <div className='col-span-10 w-full bg-gray-100 rounded-lg'>
      <h1 className='text-2xl text-center py-2' >Admin Dashboard</h1>
      <div className='px-3'>
      <Outlet />
      </div>
      
    </div>
  </div></>
  )
}
