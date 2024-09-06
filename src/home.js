
export function Home ({ usuario, setUsuario }) {

    const handleLogout = () =>{
        setUsuario([])
    }
    return(
        <div>
            <h1>Bienvenido al Vancow</h1>
            <h2>{usuario}</h2>
            <button onClick={handleLogout}>Cerrar Sesion</button>
        </div>
    )
}