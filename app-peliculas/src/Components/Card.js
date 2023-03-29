import React from 'react'

import imagen1 from  '../assets/pelicula1.jpg'

function Card() {
  return (
    <div className='card'>
        <div className='card-body'>
            <img src={imagen1} alt=""></img> 
            <h4 className='card-title'>My Title</h4>
            <p className='card-text'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>

        </div>
      
    </div>
  )
}
export default Card
