import React from 'react'

const Header = ({data,setuser,user}) => {
  // console.log(data)

  // console.log(user)
  const logoutuser=()=>{
    localStorage.removeItem("loggedInUser")
    setuser(null)
    console.log("logout")
    
     
    
  }
  return (
    <div className='flex justify-between items-end px-2 py-1 w-full mb-5'>
      <div className="">Hello <br /><span className='text-2xl font-semibold'>{data.firstname}👋</span></div>
      <button onClick={logoutuser} className='border-2 px-2 rounded-md text-white bg-red-500'>Log Out</button>
    </div>
  )
}

export default Header
