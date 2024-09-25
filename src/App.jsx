import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Register from "./pages/Login/Register";
import Login from "./pages/Login/Login";
import ProductList from "./components/ProductList/ProductList";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import DetailsPage from "./components/DetailsPage/DetailsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<HomePage />} />
      <Route path="product/:id" element={<DetailsPage />} />
      <Route element={<ProtectedRoutes />}>
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Route>
    </Routes>

  );

}
export default App;

