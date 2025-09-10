import React, { useEffect, useState } from 'react'
import Header from '../../others/Header'
import TaskListNumber from '../TaskList/TaskListNumber'
import TaskList from '../TaskList/TaskList'
const EmployeeDashboard = ({data,user,setuser}) => {
const [employeesarray,setemployeesarray]=useState([])  
useEffect(() => {
const employees=JSON.parse(localStorage.getItem("Employees"))
       // console.log(employees)
       setemployeesarray(employees)
}, [])

  return (
   <div className='px-2 py-4'>
      <Header user={user} setuser={setuser} data={data}/>
      <TaskListNumber data={data}/>
      <TaskList employeesarray={employeesarray} setemployeesarray={setemployeesarray} data={data}/>
    </div>
  )
}

export default EmployeeDashboard
