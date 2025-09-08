import React from 'react'

const CompleteTask = ({taskitem}) => {
  return (
     <div className="relative w-full p-6 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600
 backdrop-blur-md shadow-xl text-white hover:scale-[1.02] transition-transform duration-300 ease-in-out">

      {/* Floating Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-300/20 to-emerald-700/20 blur-xl -z-10"></div>

      {/* Top Row: Priority + Date */}
      <div className="flex justify-between items-center mb-3">
        <span className="px-3 py-1 rounded-lg bg-red-500/90 font-semibold text-xs sm:text-sm shadow-md">
          High Priority
        </span>
        <span className="text-xs sm:text-sm text-gray-100 font-medium">
           {taskitem.taskDate}
        </span>
      </div>

      {/* Title */}
      <div className="font-extrabold text-xl sm:text-2xl leading-snug tracking-wide">
        {taskitem.taskTitle}
      </div>

      {/* Description */}
      <p className="mt-2 text-sm sm:text-base text-gray-100/90">
        {taskitem.taskDescription || "No description provided."}
      </p>

      {/* Bottom Row: Category + Status */}
      <div className="flex justify-between items-center mt-5 text-xs sm:text-sm font-medium">
        <span className="px-3 py-1 rounded-full bg-white/10 text-gray-100 shadow-sm">
          {taskitem.category}
        </span>
        <span
          className={`px-3 py-1 rounded-full shadow-sm bg-green-500`}
        >
           Completed
        </span>
      </div>
    </div>
  )
}

export default CompleteTask
