import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='grid grid-cols-2 gap-3 my-4'>
      <div className="bg-blue-500 p-2 rounded-md text-white font-semibold">
        <div className="number text-[7vw]">0</div>
        <div className="newtask">New Task</div>
      </div>
      <div className="bg-blue-500 p-2 rounded-md text-white font-semibold">
        <div className="number text-[7vw]">0</div>
        <div className="newtask">New Task</div>
      </div>
      <div className="bg-blue-500 p-2 rounded-md text-white font-semibold">
        <div className="number text-[7vw]">0</div>
        <div className="newtask">New Task</div>
      </div>
      <div className="bg-blue-500 p-2 rounded-md text-white font-semibold">
        <div className="number text-[7vw]">0</div>
        <div className="newtask">New Task</div>
      </div>
    </div>
  )
}

export default TaskListNumber
