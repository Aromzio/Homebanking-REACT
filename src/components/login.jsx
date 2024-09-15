import { useContext, useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Inicio } from "./inicio"

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
        <section className="flex absolute end-10 flex-col size-60 text-center bg-gray-800 text-white">
            <h1>Registrate</h1>

            <form 
                className="space-y-8"
                onSubmit={handleSubmit}>

                <input className="text-black"
                    type="text"
                    placeholder="user"
                    value={user}
                    onChange={e => setUser(e.target.value)}/>

                <input
                  placeholder="password"
                  className="text-black"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                  <Link>
                <button>Continuar</button>
                </Link>
                <Routes>
                  <Route to='/' element={<Inicio/>}></Route>
                </Routes>
            </form>

            {error && <p>Todos los campos son obligatorios</p>}

        </section>
    )
}