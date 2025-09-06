import React, { useState } from "react";
import { FaUnlockAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault(); 
    alert("subitted")
    console.log(`emai:${email}`)
    console.log(`password:${password}`)
    setemail("")
    setpassword("")
  };
  return (
    <div className="flex items-center justify-center">
      <div className="border-2 border-green-500 bg-white text-black w-[100%] h-screen px-10 flex flex-col gap-10 py-15">
        <h1 className="text-[10vw] font-bold text-center text-green-600">
          Log in
        </h1>
        <form
          className="flex flex-col gap-6 w-[100%] md:w-[60%] mx-auto"
          onSubmit={(e) => {
            handlesubmit(e);
          }}
        >
          <div className="inputs flex flex-col gap-5">
            <div className="email flex items-center gap-3 border border-gray-300 rounded-2xl px-4 py-3 focus-within:border-green-500 transition-all">
              <MdEmail className="text-gray-500 text-xl" />
              <input
              onChange={(e)=>{setemail(e.target.value)}}
              value={email}
                required
                type="email"
                placeholder="Enter Email"
                className="flex-1 outline-none bg-transparent text-base"
              />
            </div>
            <div className="password flex items-center gap-3 border border-gray-300 rounded-2xl px-4 py-3 focus-within:border-green-500 transition-all">
              <FaUnlockAlt className="text-gray-500 text-xl" />
              <input
              onChange={(e)=>{setpassword(e.target.value)}}
              value={password}
                required
                type="password"
                placeholder="Enter Password"
                className="flex-1 outline-none bg-transparent text-base"
              />
            </div>
          </div>
          <div className="remember flex justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-green-500" />
              <span>Remember me</span>
            </label>
            <span className="text-green-600 cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </div>
          <button className="px-9 py-3 text-[5vw] bg-green-500 hover:bg-green-600 text-white font-semibold rounded-2xl shadow-md transition-all">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
