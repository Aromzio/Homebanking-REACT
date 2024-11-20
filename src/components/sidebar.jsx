import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from
'react-router-dom';
import { Productos } from './productos';
import {Inicio} from './inicio';
import { Cuenta } from './cuenta';
import { Inversiones } from './inversiones';
import { Login } from './login';
 
export const Sidebar = () => {
  return (
    <div>
        <Router>
            <div>
                <nav className='flex flex-col text-3xl p-5 bg-gray-300 h-screen'>
                    <div className='flex flex-col space-y-10'>
                    <div className='transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-500 duration-300 rounded '>
                        <Link to="/">Inicio</Link>
                    </div>
                    <div className='transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-500 duration-300 rounded'>
                        <Link to="/productos">Productos</Link>
                    </div>
                    <div className='transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-500 duration-300 rounded '>
                    <Link to="/Inversiones">Inversiones</Link>
                    </div>
                    <div className='transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-500 duration-300 rounded '>
                        <Link to="/cuenta">Cuenta</Link>
                    </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Inicio/>}/>
                    <Route path="/productos" element={<Productos/>}/>
                    <Route path="/cuenta" element={<Cuenta/>}/>
                    <Route path="/inversiones" element={<Inversiones/>}/>
                    <Route path='/login'element={<Login/>}></Route>
                </Routes>
            </div>
        </Router>
    </div>
  )
}



