//Importando la Biblioteca o Modulo de React
import React from 'react'
//Biblioteca que se utiliza para manipular el documento principal de la pagina 
import ReactDOM from 'react-dom/client'

//En esta Linea ya tengo el div seleccionado de la pagina principal index para empezar a alterarlo y ya tengo una aplicacion realizada
const root=ReactDOM.createRoot(document.getElementById('root'))
//Montando la aplicacion en el componete root
//Este  codigo me devolvera una aplicaicon de react principal llamada desde el elemnto raiz

//Esta funcion render espera elmentos hijos children para crear una aplicacion
root.render(<h1>Mi Primara Aplicacion en React 18!!</h1>)
