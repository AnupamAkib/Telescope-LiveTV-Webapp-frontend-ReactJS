import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Watch from "./Watch";
import Data from "./Data";
import Header from "./header/Header";
import Signup from "./Signup";
import Login from "./Login";
import VerifyEmail from "./VerifyEmail";
import Logout from "./Logout";
import About from "./About";
import ForgetPassword from "./ForgetPassword";
import Activity from "./Activity";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/watch/:url' element={<Watch />} />
        <Route path='/data' element={<Data />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/verifyEmail/:id' element={<VerifyEmail />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/about' element={<About />} />
        <Route path='/password_recovery' element={<ForgetPassword />} />
        <Route path='/activity' element={<Activity />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;