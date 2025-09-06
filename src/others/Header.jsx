import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-end px-4 py-1'>
      <div className="">Hello <br /><span className='text-2xl font-semibold'>Akshit👋</span></div>
      <button className='border-2 px-2 rounded-md text-white bg-red-500'>Log Out</button>
    </div>
  )
}

export default Header
