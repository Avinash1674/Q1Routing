import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Navbar from './Router/Navbar';
import Login from './Router/Login';
import Register from './Router/Register';
import Home from './Router/Home';
import AboutUs from './Router/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={<Navbar />}
          <Route path="login" component={<Login />} />
        <Route path="register" component={<Register />} />
        <Route path="home" component={<Home />} />
        <Route path="about-us" component={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
