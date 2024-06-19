import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Watch from "./Watch";
import Data from "./Data";
import Header from "./header/Header";
import Signup from "./Signup";
import Login from "./Login";


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
      </Routes>
    </BrowserRouter>
  )
}

export default App;