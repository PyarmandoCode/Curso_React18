import React from 'react';
import './App.css';
//import Dinamica1 from './Componets/dinamica1';
import Dinamica2 from './Componets/dinamica2';

//Reutilizar
//const displayProductName = event => alert(event.target.id);

// const productos = [
//   {
//     imagen: "😀",
//     nombre: "producto face",
//     precio:"1200"
//   },
//   {
//     imagen: "🎉",
//     nombre: "producto popper",
//     precio:"1320"
//   },
//   {
//     imagen: "💃",
//     nombre: "producto dacing",
//     precio:"1700"
//   },
 
// ]


//Componente Principal
// function App() {
//   const greeting = "greeting"
//   return (
//     //Fragmento
//     <div className="container">
//       <h1 id={greeting}>Este es un Blog de Productos!!!</h1>
//       <p>Encontra Informacion de Productos</p>
//       <ul>
//         {
//           //El Metodo MAP transforma los elementos del Array UNO X UNO  aplicandoles una funcion base al elemento y a s posicion gracias al KEY forEach

//           productos.map(producto => (
//             <li key={producto.nombre}>
//               <button
//                 onClick={displayProductName}
//               >
//                 <span role="img" aria-label={producto.nombre} id={producto.nombre}>{producto.imagen}</span>
//                 <p>{producto.precio}</p>
//               </button>

//             </li>

//           ))
//         }
//       </ul>


//     </div>
//   )
// }

function App() {
  return (
    <div>
     <Dinamica2/>
    </div>
  )
}
export default App;
