import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-700">
          ¡Welcome to the home page!
        </h1>
        <p className="text-gray-700">
          This is a simple web page which implements a register and a login.
          <br /> Using Tailwind. And implementing JWS for added security
        </p>

        <div className="mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[125px]"
            onClick={() => navigate("/login")}
          >
            Log in
          </button>
          <button className="ml-2 bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-[125px]">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
