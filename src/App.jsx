import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

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
        {/* Публични */}
        <Route path="/" element={<Home />} />
        <Route 
        path="/login" 
        element={
        <PublicRoute>
          <Login />
          </PublicRoute>
        }
      />
        <Route 
        path="/register" 
        element={
        <PublicRoute>
          <Register />
          </PublicRoute>
        } 
        />

        {/* Приватни */}
        <Route 
        path="/dashboard" 
        element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
        } 
        />
        <Route 
        path="/themes" 
        element={
          <PrivateRoute>
            <Themes />
          </PrivateRoute>
        }
        />
        <Route path="/forums" 
        element={
          <PrivateRoute>
           <Forums /> 
          </PrivateRoute>
        } 
        />
        <Route 
        path="/forums/:id" 
        element={
        <PrivateRoute>
        <ForumCategory />
        </PrivateRoute>
        } 
        />
        <Route 
        path="/topic/:topicId" 
        element={
        <PrivateRoute>
        <Topic />
        </PrivateRoute>
        } 
        />
        <Route 
        path="/details/:id" 
        element={<PrivateRoute>
        <Details />
          </PrivateRoute>
        } 
        />
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}