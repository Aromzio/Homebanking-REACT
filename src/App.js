import { Login } from './login';
import './App.css';
import { Home } from './home';
import { useState } from 'react';

function App() {

  const [usuario, setUsuario]= useState ([])


  return (
    <div className="App">
      {
        !usuario.length > 0
          ? <Login setUsuario={setUsuario} />
          : <Home usuario={usuario} setUsuario={setUsuario}/>
      }
     
    </div>
  );
}

export default App;
