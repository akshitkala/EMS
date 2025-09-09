import React from 'react'
import Header from '../../others/Header'
import TaskListNumber from '../TaskList/TaskListNumber'
import TaskList from '../TaskList/TaskList'
const EmployeeDashboard = ({data,user,setuser}) => {
  // console.log(data)
  return (
   <div className='px-2 py-4'>
      <Header user={user} setuser={setuser} data={data}/>
      <TaskListNumber data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
