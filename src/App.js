// import './App.css';
// import React from 'react'
// import ReactDOM from 'react-dom'
import React, { Component }  from 'react';
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import AddService from "./Pages/AddService/AddService";
import Checkout from "./Pages/Checkout/Checkout/Checkout";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Signup from "./Pages/Login/Signup/Signup";
import ManageServices from "./Pages/ManageServices/ManageServices";
import Order from './Pages/Order/Order';
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/checkout/:serviceId" element={
          <RequireAuth>
            <Checkout/>
          </RequireAuth>
        }></Route>
        <Route path="/addservice" element={
          <RequireAuth>
            <AddService/>
          </RequireAuth>
        }></Route>
        <Route path="/manage" element={
          <RequireAuth>
            <ManageServices/>
          </RequireAuth>
        }></Route>
        <Route path="/orders" element={
          <RequireAuth>
            <Order/>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>

      <Footer/>
      
    </div>
  );
}

export default App;
