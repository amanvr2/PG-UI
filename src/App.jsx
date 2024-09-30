import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Home from './components/home';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}>

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
