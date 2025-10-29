import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      {/* Login Page */}
      <Route path="/login" element={<Login />} />

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
