import React from 'react'
import imginicio from '../visuals/imginicio.jpeg'


export const Inicio = () => {
  return (
    <div className='absolute  container flex left-60 top-24 sm:top-22 w-screen'>
      <h2 className='relative text-5xl'>Inicio</h2>  
      <div className='absolute top-16  '>
        <div className='rounded-lg'><img src={imginicio} alt="imageninicio" />
        <p className='absolute top-2 left-4 text-white text-3xl '>Todo lo que necesitas en un solo lugar.</p>
        </div>
        <div className='absolute top-32 left-3  text-white text-xl line-clamp-9'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus, est nec rhoncus auctor, sem metus luctus neque, sed convallis dolor ligula vitae dui. In auctor ut ante ac feugiat. Nulla pretium rutrum lectus tempor vulputate. Quisque tempor mollis sapien, ut condimentum ipsum aliquam a. Morbi ultricies pellentesque augue, eu bibendum nisi malesuada at. Curabitur sed tortor quam. Suspendisse id tincidunt justo. Donec sollicitudin leo erat, laoreet fringilla turpis dapibus quis. Quisque placerat elit tortor, et viverra libero vulputate quis.

Donec augue quam, molestie vel porta porttitor, elementum a nunc. Nullam ullamcorper pretium tincidunt. Quisque mollis mauris vel est sodales maximus. Nunc tellus mauris, iaculis ac porta id, bibendum ut dolor. Ut sodales tempor lacus, quis commodo elit convallis ac. Vestibulum sollicitudin, tortor a mollis efficitur, dolor quam sodales odio, quis dictum mi felis vitae ex. Vivamus convallis risus non quam mattis suscipit. Etiam ut massa justo.</p>
        </div>
      </div>
    </div>
  )
}
  