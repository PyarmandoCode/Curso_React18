export function Persona(props) {
    return <h2>Hola {props.name } Bienvenido a React</h2>
}

export function Navegacion(parametros) {
    return (<ul id="nav">
        <li><a href={parametros.angular} >Angular</a></li>
        <li><a href={parametros.react} >React</a></li>
        </ul>
    )
}