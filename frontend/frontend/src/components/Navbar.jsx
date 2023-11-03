import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-around p-3 border-b border-zinc-500 items-center bg-[#1a1a1a]/90 text-zinc-300">
      <Link>
        <h1 className="text-3xl">AuthDB</h1>
      </Link>
      <ul className="flex gap-5">
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/signup">
          <li>SignUp</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
