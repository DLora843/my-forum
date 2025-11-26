import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Category from "./pages/Category";
import Thread from "./pages/Thread";
import NewThread from "./pages/NewThread";
import NewPost from "./pages/NewPost";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/thread/:id" element={<Thread />} />
          <Route
            path="/category/:id/new-thread"
            element={
              <PrivateRoute>
                <NewThread />
              </PrivateRoute>
            }
          />
          <Route
            path="/thread/:id/new-post"
            element={
              <PrivateRoute>
                <NewPost />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
