import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Register from "./pages/Login/Register";
import ProductList from "./components/ProductList/ProductList";

const App = () =>{
  return ( 
    <Routes>
      <Route path="/" element={<Register />} /> 
    </Routes>

  );

}
export default App;

