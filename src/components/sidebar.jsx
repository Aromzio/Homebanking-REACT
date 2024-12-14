import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from
'react-router-dom';

 
export const Sidebar = () => {
  return (
    <div>
        
            <div>
                <nav className='flex flex-col text-3xl p-5 bg-gray-300 h-screen'>
                    <div className='flex flex-col space-y-10'>
                    <div className='transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-500 duration-300 rounded '>
                        <Link to="/"><button className='px-12'>Inicio</button></Link>
                    </div>
                    <div className='transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-500 duration-300 rounded'>
                        <Link to="/productos"><button className='px-3'>Productos</button></Link>
                    </div>
                    <div className='transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-500 duration-300 rounded '>
                    <Link to="/Inversiones"><button className='px-2'>Conversiones</button></Link>
                    </div>
                    <div className='transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-500 duration-300 rounded '>
                        <Link to="/cuenta"><button className='px-8'>Cuenta</button></Link>
                    </div>
                    </div>
                </nav>
                
            </div>
        
    </div>
  )
}



