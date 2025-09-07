import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import TaskList from "./components/TaskList/TaskList";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./Utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
const App = () => {
  useEffect(() => {
    setLocalStorage();
  }, []);

  
  const [user, setuser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  
  const Authdata = useContext(AuthContext);
  useEffect(() => {
    console.log(user)
  }, [user])
  const handleLogin = (email, password) => {
    if (
      Authdata &&
      Authdata.admin.find((e) => email === e.email && password === e.password)
    ) {
      localStorage.setItem("loggenInUser",JSON.stringify({role:"admin"}))
      setuser("admin");
    } else if (
      Authdata &&
      Authdata.employees.find(
        (e) => email === e.email && password === e.password
      )
    ) {
      const employee= Authdata.employees.find(
        (e) => email === e.email && password === e.password
      )
      localStorage.setItem("loggenInUser",JSON.stringify({role:"employee"}))
      setloggedInUserData(employee)
      setuser("user");
    } else {
      console.log("wrong");
    }
    // console.log(user);
  };
  

  return (
    <>
      {!user ? <Login handlelogin={handleLogin} /> : ""}
      {user == "admin" && <AdminDashboard />}
      {user == "user" && <EmployeeDashboard data={loggedInUserData} />}
    </>
  );
};

export default App;
