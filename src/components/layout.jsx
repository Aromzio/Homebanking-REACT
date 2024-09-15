import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from
'react-router-dom';
import logo from '../visuals/logo192.png' 
import App from '../App';
import { Sidebar } from './sidebar'
import call from '../visuals/call.png'
import menu from '../visuals/menuicon.png' 
import { Login } from './login';


export const Encabezado = () => {
  return (
    <div className='relative flex  justify-between bg-gradient-to-r from-emerald-500 to-gray-800 mx-w h-20 sm:h-20 xl:h-20'>
        <img src={menu} alt="menu" className='py-2 sm:size-0'/>
        <div className='flex p-3 in-line'>
          <div className='flex space-x-5'>
              <div className='flex size-0 sm:size-10 lg:size-12'>
                <img src="logo192.png" alt="logo vancow" />
              </div>
              <div className='flex text-3xl lg:text-4xl pb 2xl:text-5xl pt-4'>
                <h1 className='text-white font-medium'>Vancow</h1>
              </div>
            </div>
      </div>  
            <div className='flex h-8 w-20 py-6 rounded'>
            <Router>
            <Link to='/login'>
            <button className='bg-white rounded end-7'>
              Registrate
            </button>
            </Link>
            <Routes>
              <Route path='/login'element={<Login/>}></Route>
            </Routes>
            </Router>
            </div>
        </div>
  )
}

export const Content = () => {
  return (
    
      <div>
        <div className="sm:relative h-screen w-52 top-0 start-0">
          <Sidebar/>
        </div>    
        </div>

  )
}


export const Footer = () => {
  return (
    <div className="sm:relative mx-w h-50 bg-gray-800 text-gray-300">
      <div>
        <div className='flex px-60 py-10 text-center in-line divide-x divide-gray-600'>
          <div  className='relative pr-20'>
              <h2 className='text-2xl inline-block'>Contactenos</h2>
            <div>
              <img src={call} alt='contact'/>
              <ul className='text-lg'>
                <li>Centro de Atencion al Cliente...</li>
              </ul>
            </div>
          </div> 
          <div className='px-20'>
            <h2 className='text-2xl inline-block'>Sucursales</h2>
            <div>
              <ul className='text-lg'>
                <li>Ver Sucursales...</li>
              </ul>
            </div>
          </div>
          <div>
            <div className='pl-20'>
              <h2 className='text-2xl '>Acerca de VANCOW</h2>
              <div>
                <ul>
                  <li>El mejor servicio de la Argentina...</li>
                </ul>
              </div>
            </div>
          </div>       
        </div>
      <div>
      </div>
      </div>
      <div className='flex pt-10 space-x-20 text-gray-500'>
      <p>© 2024 Vancow &Co. All rights reserved.</p>
      <p>Politica de Privacidad.</p>
      <p>Terminos y Condiciones.</p>
      </div>
      
    </div>
  )
} 

