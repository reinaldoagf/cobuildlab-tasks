import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function RegisterPage() {
    return (
        <>
        <div className="left-inner">

      <div className="sign-up-form active">
         <h1>Registrate</h1>

         <div className="seperator">
               <span>Ingrese sus datos</span>
         </div>

         <form action="">
            <div className="form-group">
               <label htmlFor="">Nombre y Apellido</label>
               <input type="input" placeholder="Nombre y Apellido" />
            </div>
            <div className="form-group">
               <label htmlFor="">E-mail</label>
               <input type="email" placeholder="@mail.com" />
            </div>
            <div className="form-group">
               <label htmlFor="">Password</label>
               <input type="password" placeholder="password" />

            </div>
            <div className="form-group">
               <button>Registrarme</button>
            </div>
            <div className="create-aacount">
                ¿Registrado? <Link to="/"><a  href="/#" className="text-underline sign-in-form-btn"> Inicia sesión </a></Link>
            </div>
         </form>
      </div>
      </div>
   
</>
    )
}