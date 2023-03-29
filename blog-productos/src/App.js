import React from 'react';
import './App.css';


//Reutilizar
const displayProductName = event => alert(event.target.id);

const productos = [
  {
    imagen: "😀",
    nombre: "producto face",
    precio:"1200"
  },
  {
    imagen: "🎉",
    nombre: "producto popper",
    precio:"1320"
  },
  {
    imagen: "💃",
    nombre: "producto dacing",
    precio:"1700"
  },
 
]

//Componente Principal
function App() {
  const greeting = "greeting"
  return (
    //Fragmento
    <div className="container">
      <h1 id={greeting}>Este es un Blog de Productos!!!</h1>
      <p>Encontra Informacion de Productos</p>
      <ul>
        {
          productos.map(producto => (
            <li key={producto.nombre}>
              <button
                onClick={displayProductName}
              >
                <span role="img" aria-label={producto.nombre} id={producto.nombre}>{producto.imagen}</span>
                <p>{producto.precio}</p>
              </button>

            </li>

          ))
        }
      </ul>


    </div>
  )
}
export default App;
