import React from 'react'
import ProductsDemo from './productosdemo'

export const Productos = () => {
  return (
    <div className='absolute mx-screen container flex left-60 top-24 sm:top-22'>
      <h2 className='w-screen h-10 text-5xl'>Productos</h2>  
      <div className='absolute mx-w inset-y-20'>
        <ProductsDemo/>
      </div>
    </div>
  )
}
