import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from
'react-router-dom';
import logo192 from '/Homebanking-REACT/vancow-app/src/visuals/logo192.png' 
import App from '../App';
import imgdemost from '../visuals/imgdemost.jpg'
import { Sidebar } from './sidebar';

export const Encabezado = () => {
  return (
    <div className='relative bg-gradient-to-r from-emerald-500 to-gray-800 mx-w h-20 sm:h-20 xl:h-30 2xl:45'>
      <div className='flex p-4 in-line text-white'>
        <div className='fixed flex  space-x-4' >
            <div className='size-0 sm:size-10 xl:size-15 2xl:20'>
              <img src="logo192.png" alt="logo vancow" />
            </div>
            <div className='text-3xl lg:text-4xl 2xl:text-5xl'>
              <h1 className='text-center'>Vancow</h1>
            </div>
            </div>
            <div className='absolute flex in-line end-10 bg-white size-8 sm:size-10 rounded ring-white'>
              <p className='static text-center text-2xl  text-black flex'>???</p>
            </div>
      </div>
    </div>
  )
}

export const Content = () => {
  return (
    <div className='mx-w h-screen'>
      <div>
        <div className="relative sm:h-screen w-40 top-30 start-0  bg-gray-300 rounded ">
          <div className='static flex p-10 '>
            <Sidebar/>
          </div>
        </div>
       </div>
       <div>
         <div>

        
         </div>
       </div>
    </div>
  )
}


export const Footer = () => {
  return (
    <div className="relative bg-gray-800 text-gray-300">
      <div className='relative items-center'>
        <div className='flex in-line w-40 h-70 divide-x divide-gray-600 rounded'>
          <div  className='box-content p-20'>
              <h2 className='text-2xl inline-block w-60 m-2'>Sobre nosotros</h2>
            <div>
              <ul className='text-lg list-disc'>
                <li>Historia</li>
                <li>Sucursales</li>
              </ul>
            </div>
          </div> 
          <div className='box-content p-20'>
            <h2 className='text-2xl inline-block'>Contactenos</h2>
            <div>
              <ul className='text-lg list-disc'>
                <li>vancowrrhh@site.com</li>
                <li>+54 9 11 3378-9403</li>
              </ul>
            </div>
          </div>
        </div>
      <div>
      </div>
      <div className='flex in-line space-x-20 text-gray-500 space-x-2'>
      <p>© 2024 Vancow &Co. All rights reserved.</p>
      <p>Politica de Privacidad.</p>
      <p>Terminos y Condiciones.</p>
      </div>
      </div>
    </div>
  )
} 

