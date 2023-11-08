

// utilizar un reducer para colocar datos del usuario



function AccountPage() {


  return (
    <div className="min-h-screen flex items-center justify-center text-black text-xl">
      <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
        <h1 className="text-3xl font-bold mb-4">Mi Cuenta</h1>
        <div className="mb-2">
          <strong>Nombre de usuario:</strong>
        </div>
        <div className="mb-2">
          <strong>Correo electrónico:</strong>
        </div>
        <div>
          <strong>Nombre:</strong>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
