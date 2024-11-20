import React from 'react'
import imginicio from '../visuals/imginicio.webp'

export const Inicio = () => {
  return (
    <div className='absolute mx-screen container flex left-60 top-24 sm:top-2'>
      <h2 className='relative w-screen h-10 text-5xl'>Inicio</h2>  
      <div>
        <img src={imginicio} alt="imagen inicio" className='size-30'/>
      </div>
    </div>
  )
}
