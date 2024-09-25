import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Register from "./pages/Login/Register";
import Login from "./pages/Login/Login";
import ProductList from "./components/ProductList/ProductList";

const App = () =>{
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="Login" element={<Login />} /> 
        <Route path="Register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </> 

  );

}
export default App;

