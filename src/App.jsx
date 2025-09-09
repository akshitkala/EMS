import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import TaskList from "./components/TaskList/TaskList";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./Utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
const App = () => {
  // localStorage.clear()
  const [user, setuser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  setLocalStorage()
  useEffect(() => {
  setLocalStorage()
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const UserData = JSON.parse(loggedInUser);
      console.log(`loggedInUser : ${UserData}`);
      setuser(UserData.role);
      setloggedInUserData(UserData.data);
    }
  }, []);

  const Authdata = useContext(AuthContext);
  useEffect(() => {
    console.log("user : ",user);
  }, [user]);
  const handleLogin = (email, password) => {
    if (
      Authdata &&
      Authdata.admin.find((e) => email === e.email && password === e.password)
    ) {
      const admin=  Authdata.admin.find((e) => email === e.email && password === e.password)
      console.log(admin)
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: admin})
      );
      setuser("admin");
      console.log("admin logged in")
    } else if (
      Authdata &&
      Authdata.employees.find(
        (e) => email === e.email && password === e.password
      )
    ) {
      const employee = Authdata.employees.find(
        (e) => email === e.email && password === e.password
      );
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
      setloggedInUserData(employee);
      setuser("employee");
    } else {
      console.log("wrong");
    }
    // console.log(user);
  };

  return (
    <>
      {!user ? <Login handlelogin={handleLogin} /> : ""}
      {user == "admin" && <AdminDashboard user={user} setuser={setuser}  data={loggedInUserData} />}
      {user == "employee" && <EmployeeDashboard user={user} setuser={setuser} data={loggedInUserData} />}
    </>
  );
};

export default App;
