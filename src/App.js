
import './App.css';
import React, { useState } from 'react'

import Login from './components/Login/Login'
import Register from './components/Register/Register'
import {  BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

import userData from './components/users';
import AdminPanel from "./components/adminPanel/AdminPanel.jsx"




function App() {


  const navigate =  useNavigate();
  const [userList, setUserList] = useState(userData);
 
 

  const handleSaveAfterSubmit = (registrationData) => {
   
    const { name, password, confirmPassword, answer} = registrationData;

    if (!name  || !password || !confirmPassword || !answer) {
      alert('All fields are required');
      return;
    }
  

    if(name.length <= 6){
      alert("Username strength should be more than 6 characters")
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }


    if(password.length <= 7){
      alert("Password strength should be more than 7 characters")
      return;
    }

   

    setUserList((prevUserList) => [...prevUserList, registrationData]);
navigate("/")


  };

console.log("CHECKING", userList);

  const handleLoginSubmit = (loginData) => {
    

    const user = userList.find(
      (user) => user.name === loginData.username && user.password === loginData.password
    );
    
    if (user) {
      localStorage.setItem("username", user.name);
      alert("login succesful")
      
     navigate("/admin")


   
    } else {
     alert('Login Failed. Invalid credentials.');

    }
  };





 

  // const saveRegistrationData = (registrationData) => {
  //  console.log(registrationData)
  //   userData.push(registrationData);
   
  // };

  console.log("DATA CHECK",userList)













  return (
    <div className="App">
     
    
<Routes>
<Route exact path="/" element={<Login handleLoginSubmit={handleLoginSubmit} />}/>
  <Route path='/register' element={<Register  handleSaveAfterSubmit={handleSaveAfterSubmit} />}/>
  <Route exact path='/admin' element={<AdminPanel/>}/>
</Routes>
     
    </div>
  );
}

export default App;
