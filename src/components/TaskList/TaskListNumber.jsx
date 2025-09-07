import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='grid grid-cols-2 gap-3 my-4'>
      <div className="bg-blue-500 p-2 rounded-md text-white font-semibold">
        <div className="number text-[7vw]">{data.taskCount.active}</div>
        <div className="newtask">Active</div>
      </div>
      <div className="bg-blue-500 p-2 rounded-md text-white font-semibold">
        <div className="number text-[7vw]">{data.taskCount.newTask}</div>
        <div className="newtask">New Task</div>
      </div>
      <div className="bg-blue-500 p-2 rounded-md text-white font-semibold">
        <div className="number text-[7vw]">{data.taskCount.completed}</div>
        <div className="newtask">Completed</div>
      </div>
      <div className="bg-blue-500 p-2 rounded-md text-white font-semibold">
        <div className="number text-[7vw]">{data.taskCount.failed}</div>
        <div className="newtask">Failed</div>
      </div>
    </div>
  )
}

export default TaskListNumber
