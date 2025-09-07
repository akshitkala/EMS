import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Header from "../../others/Header";
const AdminDashboard = () => {
    const [form, setform] = useState({
      title: "",
      description: "",
      date: "",
      assign: "",
      category: "",
    });

    const [taskarray,settaskaray]= useState([])
  const handlechange = (e) => {
        e.preventDefault(); 
    setform({ ...form, [e.target.id]: e.target.value });
    console.log(form)
  };
  return (
   <div className="w-full min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center px-4 py-6">
    <Header/>
  {/* Top Section */}
  <div className="flex items-center gap-3 w-full mb-6">
    <button className="p-2 rounded-full hover:bg-gray-200 transition">
      <FaArrowLeftLong size={18} />
    </button>
    <h1 className="text-lg font-semibold">Create Task</h1>
  </div>

  {/* Form */}
  <form className="w-full flex flex-col gap-5 bg-white shadow-md rounded-xl p-5 border border-gray-200">
    <div className="flex flex-col gap-2">
      <label htmlFor="title" className="text-sm font-medium text-gray-700">
        Task Title
      </label>
      <input
        id="title"
        type="text"
        placeholder="Make a UI design"
        className="px-3 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
      />
    </div>

    <div className="flex flex-col gap-2">
      <label htmlFor="description" className="text-sm font-medium text-gray-700">
        Description
      </label>
      <textarea
        id="description"
        rows="3"
        placeholder="Detailed description of task (Max 500 words)"
        className="px-3 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none shadow-sm"
      />
    </div>

    <div className="flex flex-col gap-2">
      <label htmlFor="date" className="text-sm font-medium text-gray-700">
        Date
      </label>
      <input
        id="date"
        type="date"
        className="px-3 py-3 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
      />
    </div>

    <div className="flex flex-col gap-2">
      <label htmlFor="assign" className="text-sm font-medium text-gray-700">
        Assign To
      </label>
      <input
        id="assign"
        type="text"
        placeholder="Enter name or email"
        className="px-3 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
      />
    </div>

    <div className="flex flex-col gap-2">
      <label htmlFor="category" className="text-sm font-medium text-gray-700">
        Category
      </label>
      <input
        id="category"
        type="text"
        placeholder="Design, Development, etc."
        className="px-3 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
      />
    </div>

    <button
      type="submit"
      className="mt-2 w-full py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-white shadow-md transition"
    >
      Create Task
    </button>
  </form>

  {/* Task List */}
{/* Task List */}
<div className="w-full mt-8 space-y-3">
  <h2 className="text-base font-semibold text-gray-800 mb-2">Task List</h2>

  {/* Example Task - Pending */}
  <div className="bg-yellow-50 p-4 rounded-lg shadow-md border border-yellow-200">
    <span className="block font-semibold text-gray-900">Akshit</span>
    <span className="block text-gray-600 text-sm">Make a Navbar</span>
    <span className="mt-2 inline-block px-3 py-1 text-sm rounded-full bg-yellow-200 text-yellow-800 font-medium">
      Pending
    </span>
  </div>

  {/* Example Task - In Progress */}
  <div className="bg-blue-50 p-4 rounded-lg shadow-md border border-blue-200">
    <span className="block font-semibold text-gray-900">Riya</span>
    <span className="block text-gray-600 text-sm">Build Login Page</span>
    <span className="mt-2 inline-block px-3 py-1 text-sm rounded-full bg-blue-200 text-blue-800 font-medium">
      In Progress
    </span>
  </div>

  {/* Example Task - Completed */}
  <div className="bg-green-50 p-4 rounded-lg shadow-md border border-green-200">
    <span className="block font-semibold text-gray-900">John</span>
    <span className="block text-gray-600 text-sm">Create Dashboard</span>
    <span className="mt-2 inline-block px-3 py-1 text-sm rounded-full bg-green-200 text-green-800 font-medium">
      Completed
    </span>
  </div>
</div>

</div>

  );
};

export default AdminDashboard;
