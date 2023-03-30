import React from "react";

class Alumno extends React.Component {
    constructor(props) {
        super(props);
        this.state={nota:"Por Determinar"}
    }
    render () {
        return (
            <div>
                <h1>{this.props.nombre}</h1>
                <h1>{this.props.nota}</h1>
            </div>
        )
    }
}

export default function State1() {
    return (
        <div>
            <Alumno nombre="Ana" />
            <Alumno nombre="Eva" />
        </div>
    )
}