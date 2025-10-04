import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

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
    </Routes>
  );
}

export default App;
