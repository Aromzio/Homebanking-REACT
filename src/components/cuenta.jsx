import React from 'react'

export const Cuenta = () => {
  return (
    <div className='absolute mx-screen container flex left-60 top-24 sm:top-2'>
      <h2 className='h-screen h-10 text-5xl absolute inset-y-26'>Cuenta </h2>  
      <div className='absolute text-gray-500 text-xl inset-y-16 '>
        <p className='font-bond text-black text-2xl'>Datos</p>
        <div className=''>Saldo
          <p className='text-emerald-600'>$ 1000000</p>
        </div>
        <div>Nombre
          <p className='text-black'>Alejo</p>
        </div>
        <div>Apellido
          <p className='text-black'>Martinez</p>
        </div>
        
      </div>
    </div>
  )
}
