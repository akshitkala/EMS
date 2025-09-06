import React from 'react'
import Header from '../../others/Header'
import TaskListNumber from '../TaskList/TaskListNumber'
import TaskList from '../TaskList/TaskList'
const EmployeeDashboard = () => {
  return (
   <div className='px-2 py-4'>
      <Header/>
      <TaskListNumber/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
