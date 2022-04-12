// import './App.css';

import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Signup from "./Pages/Login/Signup/Signup";
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
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
