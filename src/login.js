import "./login.css";
import { useState } from "react";

export function Login({ setUsuario }) {
    const [user, setUser] = useState ("")
    const [password, setPassword]= useState ("")
    const [error, setError]= useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(user === "" || password === "") {
            setError(true)
            return
        }

        setError(false)

        setUsuario([user])
    }


    return (
        <section>
            <h1>Login</h1>

            <form 
                className="login"
                onSubmit={handleSubmit}>

                <input 
                    type="text"
                    value={user}
                    onChange={e => setUser(e.target.value)}/>

                <input 
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>

                <button>Iniciar sesion</button>
            </form>

            {error && <p>Todos los campos son obligatorios</p>}

        </section>
    )
}


