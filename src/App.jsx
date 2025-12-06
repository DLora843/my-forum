import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import Themes from "./pages/Themes";
import Forums from "./pages/Forums";
import ForumCategory from "./pages/ForumCategory";
import Topic from "./pages/Topic";


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
        <Route path="/themes" element={<Themes />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/forums/:id" element={<ForumCategory />} />
        <Route path="/topic/:topicId" element={<Topic />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}