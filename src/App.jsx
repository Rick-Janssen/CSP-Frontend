import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Register from "./pages/Login/Register";
import Login from "./pages/Login/Login";
import ProductList from "./components/ProductList/ProductList";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import LandingPage from "./components/LandingPage/LandingPage";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route element={<ProtectedRoutes />}>
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Route>
    </Routes>

  );

}
export default App;

