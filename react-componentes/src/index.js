import React from 'react'
import ReactDOM from 'react-dom/client'

const root=ReactDOM.createRoot(document.getElementById('root'))

//Ejemplo 01

// function Saludar() {
//     return <h1>Este es mi Primer Componente</h1>
// }

//Creando mi Primer Componente
//root.render(Saludar()) //Forma1  Funcion
//root.render(<Saludar></Saludar>)//Forma2  Como una interface
//root.render(<Saludar/>)//Forma3  Como una interface

//Ejemplo 02

// function Saludar() {
//     return <h1>Este es mi Primer Componente</h1>
// }

//Para poder reutilizar un componente debe ir en un elemento principal que puedes ser un div,span etc
// root.render( <div>
//     <Saludar/>
//     <Saludar/>
//     <Saludar/>
//     <Saludar/>
//     </div>
// )

//*********************** */
//Ejemplo 03
function OtraFuncion() {
    return <div>
        <h1>Este es un Componente</h1>
        <p>Creado desde React18</p>
    </div>
}

root.render(<div>
    <OtraFuncion/>
</div>)

  
  



