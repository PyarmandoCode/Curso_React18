import React from 'react';
import ReactDOM from 'react-dom/client';
import { Sumar } from './Components/Sumar'
import Evaluar from './Components/Evaluar'
import { Persona, Navegacion } from './Components/Propsdemo'

const root = ReactDOM.createRoot(document.getElementById('root'))

// function Saludo() {
//   const name = "Armando"
//   return (
//     <>
//     <Persona name = {name} />
//     </>
//   )

// }


root.render(<>
  <Navegacion angular="https://angular.io"
    react="https://react.dev/" />
</>)

