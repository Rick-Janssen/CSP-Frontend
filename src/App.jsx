import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Register from "./pages/Login/Register";
import Login from "./pages/Login/Login";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import LandingPage from "./components/LandingPage/LandingPage";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import ProductList from "./components/ProductList/ProductList";
import MostRatedPage from "./pages/MostRatedPage/MostRatedPage";
import Navbar from "./components/Navbar/Navbar";

const App = () => {

  <Navbar />
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/best_rated" element={<MostRatedPage />} />
        <Route path="/product/:id" element={<DetailsPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route element={<ProtectedRoutes />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </>


  )
};
export default App;

