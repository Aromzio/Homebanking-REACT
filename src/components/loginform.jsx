import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold text-center text-emerald-600">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium"
            >
              Usuario
            </label>
            <input
              id="username"
              type="text"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Ingresa tu usuario"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Ingresa tu contraseña"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg font-medium transition"
          >
            Iniciar Sesión
          </button>
        </form>
        
      </div>
    </div>
  );
}

export default LoginForm;
