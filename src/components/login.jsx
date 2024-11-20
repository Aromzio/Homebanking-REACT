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
        <section className="flex flex-col absolute end-10 py-6 size-64 rounded-lg text-center  bg-gray-800 text-white">
            <div className="flex-col align">
            <h1 className="p-2 text-2xl">Login</h1>

            <form 
                className="flex-col inset-y-6"
                onSubmit={handleSubmit}>

                <input className="text-black my-4"
                    type="text"
                    placeholder="user"
                    value={user}
                    onChange={e => setUser(e.target.value)}/>
                
                <input
                  placeholder="password"
                  className="flex-col text-black my-4"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                  <Link>
                <button className="flex mx-24 bg-gray-600 p-2 rounded-lg hover">Continuar</button>
                </Link>
                <Routes>
                  <Route to='/' element={<Inicio/>}></Route>
                </Routes>
            </form>

            {error && <p>Todos los campos son obligatorios</p>}
            </div>
        </section>
    )
}