import { useState } from "react";

export default function App() {

  //los estados siempren tiene dos valores el key principal el seteador
  const [user, setUser] = useState(null)
  const [search, setSearch] = useState("")

  const fetchUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${search}`);
      //En data tendre toda la informacion del endpoint
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log("error", error.message);
    }
  };
  return (
    <div className="container">
      <h1>Buscador de Repositorios</h1>
      <div className="grid">
        <div>
          <input onChange={(e) => setSearch(e.target.value)} placeholder="Ingrese el nombre del usuario"></input>
        </div>
        <div>
          <button onClick={fetchUser}>Buscar</button>
        </div>
      </div>
      <article>
        { user && (
        <div className="container">
          <img src={user.avatar_url} alt="" />
          <h4>{user.name}</h4>
          <p>{user.bio}</p>
        </div>
        )}
      </article>

    </div>
  )
}