import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/me", {
          withCredentials: true, 
        });
        setUser(res.data);
      } catch {
        setUser(null);
      }
    };
    fetchMe();
  }, []);

  const handleLogout = async () => {
    await axios.post("http://localhost:8080/api/logout", {}, { withCredentials: true });
    setUser(null);
    window.location.href = "/login"; 
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-orange-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Raja Kebab</h1>

      <div className="space-x-6">
        <a href="/" className="hover:text-yellow-400 transition">Home</a>

        {!user ? (
          <>
            <a href="/login" className="hover:text-yellow-400 transition">Login</a>
            <a href="/register" className="hover:text-yellow-400 transition">Register</a>
          </>
        ) : (
          <>
            {user.role === "admin" ? (
              <a href="/admin/dashboard" className="hover:text-yellow-400 transition">Dashboard</a>
            ) : (
              <a href="/dashboard" className="hover:text-yellow-400 transition">Dashboard</a>
            )}
            <button
              onClick={handleLogout}
              className="hover:text-red-400 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
