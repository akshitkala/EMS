import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Header from "../../others/Header";
const AdminDashboard = ({data,setuser,user}) => {
    const [form, setform] = useState({
      title: "",
      description: "",
      date: "",
      assign: "",
      category: ""
    });
    const [employeesarray,setemployeesarray]=useState([])
    const [task,settask]= useState()
    useEffect(() => {
      const employees=JSON.parse(localStorage.getItem("Employees"))
      // console.log(employees)
      setemployeesarray(employees)
    }, [])
    
  const handlechange = (e) => {
        e.preventDefault(); 
        
    setform({ ...form, [e.target.id]: e.target.value });
    // console.log(form)
  };

  const handleSubmit = (e)=>{
e.preventDefault()
    // alert("submitted")
   const newTask = {
    taskTitle: form.title,
    taskDescription: form.description,
    taskDate: form.date,
    category: form.category,
    status: "new",
  };

  const updatedemployeesarray = employeesarray.map((elem) => {
    if (elem.firstname === form.assign) {
      return {
        ...elem,
        tasks: [...elem.tasks, newTask], // use newTask directly
        taskNumber: elem.taskNumber + 1,
        taskCount: { ...elem.taskCount, new: elem.taskCount.new + 1 },
      };
    }
    return elem;
  });

  setemployeesarray(updatedemployeesarray);
  console.log(updatedemployeesarray)
  localStorage.setItem("Employees", JSON.stringify(updatedemployeesarray));
  setform({
      title: "",
      description: "",
      date: "",
      assign: "",
      category: ""
    })

   
  }
  return (
   <div className="w-full min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center px-4 py-6">
    <Header user={user} setuser={setuser}   data={data}/>
  {/* Top Section */}
  <div className="flex items-center gap-3 w-full mb-6">
    <button className="p-2 rounded-full hover:bg-gray-200 transition">
      <FaArrowLeftLong size={18} />
    </button>
    <h1 className="text-lg font-semibold">Create Task</h1>
  </div>

  {/* Form */}
  <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 bg-white shadow-md rounded-xl p-5 border border-gray-200">
    <div className="flex flex-col gap-2">
      <label htmlFor="title" className="text-sm font-medium text-gray-700">
        Task Title
      </label>
      <input required
        onChange={(e)=>handlechange(e)}
        value={form.title}
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
      onChange={(e)=>handlechange(e)}
      value={form.description}
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
      <input required
      onChange={(e)=>handlechange(e)}
      value={form.date}
        id="date"
        type="date"
        className="px-3 py-3 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
      />
    </div>

    <div className="flex flex-col gap-2">
      <label htmlFor="assign" className="text-sm font-medium text-gray-700">
        Assign To
      </label>
      <input required
      onChange={(e)=>handlechange(e)}
      value={form.assign}
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
      <input required
        onChange={(e)=>handlechange(e)}
        value={form.category}
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
  <div className="relative overflow-x-auto shadow-md rounded-xl border border-gray-200">
    <table className="w-full text-sm text-left text-gray-600">
      <thead className="text-xs uppercase bg-green-100 text-green-700">
        <tr>
          <th scope="col" className="px-6 py-3 w-1/5 text-center">Employee Name</th>
          <th scope="col" className="px-6 py-3 w-1/5 text-center">Active task</th>
          <th scope="col" className="px-6 py-3 w-1/5 text-center">Completed task</th>
          <th scope="col" className="px-6 py-3 w-1/5 text-center">New task</th>
          <th scope="col" className="px-6 py-3 w-1/5 text-center">Failed</th>
  
        </tr>
      </thead>
      <tbody>
        {employeesarray.map((item,index)=>{
          return <tr key={index} className="bg-white border-b hover:bg-green-50">
          
          <td className="px-6 py-4 text-center">{item.firstname}</td>
          <td className="px-6 py-4 text-center">{item.taskCount.active}</td>
          <td className="px-6 py-4 text-center">{item.taskCount.completed}</td>
          <td className="px-6 py-4 text-center">{item.taskCount.new}</td>
          <td className="px-6 py-4 text-center">{item.taskCount.failed}</td>
          
        </tr>
        })}
        
      </tbody>
    </table>
  </div>
</div>


</div>

  );
};

export default AdminDashboard;
