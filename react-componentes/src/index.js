import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

//Ejemplo 01

// function Saludar() {
//     return <h1>Este es mi Primer Componente</h1>
// }

//Creando mi Primer Componente
//root.render(Saludar()) //Forma1  Funcion
//root.render(<Saludar></Saludar>)//Forma2  Como una interface
//root.render(<Saludar/>)//Forma3  Como una interface

//************************************************ */

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
// function OtraFuncion() {
//     return <div>
//         <h1>Este es un Componente</h1>
//         <p>Creado desde React18</p>
//     </div>
// }

// root.render(<div>
//     <OtraFuncion/>
// </div>)

//*********************** */

//Ejemplo 03 -Uso de JSX

function JSXdemo() {
    const name = "Armando"
    const edad = 41
    let aprendi = true
    //Condicionales Simples
    // if (aprendi) {
    //     return <h1>Aprediendo React18</h1>
    // }else {
    //     return <h1>No Aprediendo React18</h1>
    // }
    //Operadores ternarios
    return <h1>{aprendi ? "Aprendiento React18 😁" : "No Aprendido React 🤔"}</h1>

    //Las llaves te permiten interpretar el codigo
    //return <h1> {name} {edad} {40 + 23} {"Curso"+"React"} </h1>
}

function Calculadura() {
    function add(x, y) {
        return x + y
    }
    return (
        <>
            <h1>{add(10, 30)}</h1>
        </>
    )

}

root.render(<>
    <Calculadura />
</>)




