import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import Themes from "./pages/Themes";


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        { /* Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/themes" element={<Themes />} />
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}