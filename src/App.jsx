import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import LoginAdmin from "./pages/LoginAdmin";

function App() {
  return (
    <Routes>
      {/* Login Page */}
      <Route path="/login" element={<Login />} />
      <Route path="/admin/login" element={<LoginAdmin />} />
      <Route path="/register" element={<Register />} />

      {/* Homepage */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Homepage />
            <About />
          </>
        }
      />

      {/* Admin Dashboard */}
      <Route
        path="/admin/dashboard"
        element={
          <>
            <Navbar />
            <Dashboard />
          </>
        }
      />
      <Route
        path="/dashboard"
        element={
          <>
            <Navbar />
            <UserDashboard />
          </>
        }
      />
      <Route
        path="/tentang"
        element={
          <>
            <Navbar />
            <About />
          </>
        }
      />
    </Routes>
  );
}

export default App;
