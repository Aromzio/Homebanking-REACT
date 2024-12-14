import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Content, Encabezado, Footer } from './components/layout';
import LoginForm from './components/loginform';
import { Productos } from './components/productos';
import {Inicio} from './components/inicio';
import { Cuenta } from './components/cuenta';
import { Inversiones } from './components/inversiones';
import usersData from './usuarios.json';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Función para manejar la autenticación
  const handleLogin = (credentials) => {
    // Validar las credenciales contra el archivo JSON
    const user = usersData.find(
      (user) =>
        user.username === credentials.username &&
        user.password === credentials.password
    );

    if (user) {
      setIsAuthenticated(true); // Usuario autenticado
    } else {
      alert('Credenciales incorrectas'); // Usuario no encontrado
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        // Contenido principal si está autenticado
        <Router>
          <Encabezado />
          <Content />
          <Routes>
                    <Route path="/" element={<Inicio/>}/>
                    <Route path="/productos" element={<Productos/>}/>
                    <Route path="/cuenta" element={<Cuenta/>}/>
                    <Route path="/inversiones" element={<Inversiones/>}/>
                    
                </Routes>
          <Footer />
        </Router>
      ) : (
        // Pantalla de login si no está autenticado
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
