import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const isUserSignIn = !!localStorage.getItem("token");

  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="flex justify-around p-3 border-b border-zinc-500 items-center bg-[#1a1a1a]/90 text-zinc-300">
      <Link>
        <h1 className="text-3xl">AuthDB</h1>
      </Link>
      <ul className="flex gap-5">
        {isUserSignIn ? (
          <>
            <Link to="/account" className="flex justify-center items-center">
              <li>Account</li>
            </Link>
            <li>
              <button onClick={handleSignOut}>Sign Out</button>
            </li>
          </>
        ) : (
          <>
            <Link to="/login">
              <li>Log In</li>
            </Link>
            <Link to="/signup">
              <li>Sign Up</li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
