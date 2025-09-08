import React from 'react'

const NewTask = ({taskitem}) => {
  return (
     <div className="p-4 w-full bg-gradient-to-r from-yellow-400 to-amber-500
 rounded-xl text-white shadow-lg">
    
    {/* Top Row: Priority + Date */}
    <div className="flex justify-between items-center mb-2">
      <span className="px-3 py-1 rounded-lg bg-red-500 font-semibold shadow-sm">
        High
      </span>
      <span className="text-sm text-gray-100 font-medium">
        {taskitem.taskDate}
      </span>
    </div>

    {/* Title */}
    <div className="font-bold text-xl sm:text-2xl leading-tight">
      {taskitem.taskTitle}
    </div>

    {/* Description */}
    <p className="mt-1 text-sm text-gray-100 opacity-90">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, deleniti.
    </p>

    {/* Bottom Row: Category + Status */}
    <div className="flex justify-between items-center mt-3 text-sm">
      <span className="px-2 py-1 bg-black/20 rounded-md shadow-sm">
        {taskitem.category}
      </span>
      <button className="px-2 py-1 rounded-md bg-yellow-400 text-black font-medium">
        Accept task
      </button>
    </div>
  </div>
  )
}

export default NewTask
