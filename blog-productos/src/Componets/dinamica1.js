export default function Dinamica1() {
    const data = [
        { id: 1, nombre: "Armando Ruiz" },
        { id: 2, nombre: "Jose Perez" },
        { id: 3, nombre: "Manuel Ramos" },
        { id: 4, nombre: "Percy Rosell" },
        { id: 5, nombre: "Carmen Davila" },
        
    ];
    return (
        <div className="App">
            {
                data.map((user) => (
                    <div className="user" key={user.id}>{user.nombre}</div>
                ))
            }
        </div>
    )
}