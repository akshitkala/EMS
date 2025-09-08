import React from 'react';

const AcceptTask = ({ taskitem }) => {
  return (
    <div className="relative w-full p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 backdrop-blur-md shadow-xl text-white hover:scale-[1.02] transition-transform duration-300 ease-in-out">
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-300/20 to-indigo-800/20 blur-2xl opacity-40 -z-10"></div>

      {/* Top Row: Priority + Date */}
      <div className="flex justify-between items-center mb-4">
        <span className="px-3 py-1 rounded-lg bg-yellow-400/90 text-black font-semibold text-xs sm:text-sm shadow-md">
          Active
        </span>
        <span className="text-xs sm:text-sm text-gray-100 font-medium">
          📅 {taskitem.taskDate}
        </span>
      </div>

      {/* Title */}
      <h2 className="font-extrabold text-xl sm:text-2xl tracking-tight leading-snug">
        {taskitem.taskTitle}
      </h2>

      {/* Description */}
      <p className="mt-2 text-sm sm:text-base text-gray-100/90">
        {taskitem.taskDescription || "No description provided."}
      </p>

      {/* Bottom Row: Category + Buttons */}
      <div className="flex justify-between items-center mt-6">
        <span className="px-3 py-1 rounded-full text-xs sm:text-sm bg-white/10 text-gray-100 shadow-sm">
          {taskitem.category}
        </span>

        {/* Buttons */}
        <div className="flex gap-2">
          <button className="px-3 py-1 text-xs sm:text-sm rounded-md bg-white/20 text-white font-medium transition-all duration-300 hover:bg-green-500 hover:text-black shadow-md">
            ✅ Complete
          </button>
          <button className="px-3 py-1 text-xs sm:text-sm rounded-md bg-white/20 text-white font-medium transition-all duration-300 hover:bg-red-500 hover:text-white shadow-md">
            ❌ Fail
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;
