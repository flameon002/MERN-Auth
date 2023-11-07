
function Home() {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-700">¡Bienvenido a mi página de inicio!</h1>
        <p className="text-gray-700">
          Esta es una página de inicio de ejemplo utilizando Tailwind CSS.
        </p>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Iniciar sesión
          </button>
          <button className="ml-2 bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
