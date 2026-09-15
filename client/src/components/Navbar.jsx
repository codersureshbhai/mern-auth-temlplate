import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      <Link to="/">
        <h2>MERN Boilerplate</h2>
      </Link>

      <div>
        <Link to="/">Home</Link>{" "}

        {!user && (
          <>
            <Link to="/login">Login</Link>{" "}
            <Link to="/register">Register</Link>
          </>
        )}

        {user && (
          <>
            <Link to="/profile">Profile</Link>{" "}
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;