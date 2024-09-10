import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from
'react-router-dom';
import  inicio  from './inicio';
import  productos  from './productos';
import  cuenta  from './cuenta';
 
export const Sidebar = () => {
  return (
    <div>
        <Router>
            <div>
                <nav>
                    <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/productos">Productos</Link>
                    </li>
                    <li>
                        <Link to="/cuenta">Cuenta</Link>
                    </li>
                    </ul>
                </nav>
                <Routes>
                    <Route exact path="/" />
                    <Route path="/productos" />
                    <Route path="/cuenta" />
                </Routes>
            </div>
        </Router>
    </div>
  )
}
