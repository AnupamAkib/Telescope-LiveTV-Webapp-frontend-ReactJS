import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Watch from "./Watch";
import Data from "./Data";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/watch/:url' element={<Watch />} />
        <Route path='/data' element={<Data />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;