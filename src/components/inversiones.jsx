import React from 'react'
import CurrencyConverter from './convertidor'

export const Inversiones = () => {
  return (
    <div className='absolute mx-screen container flex left-60 top-24 sm:top-22'>
    <h2 className='w-screen h-10 text-5xl'>Conversiones</h2>  
    <div className='absolute inset-y-20'>
    <CurrencyConverter/>
    </div>
  </div>
  )
}
