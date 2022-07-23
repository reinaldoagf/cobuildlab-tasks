import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function LoginPage() {
    return (
        <>
      <div className="left-inner">

         <div className="sign-in-form active">
            <h1>Inicie sesión</h1>
            <div className="seperator">
               <span>Ingrese sus datos</span>
            </div>

            <form action="">
               <div className="form-group">
                  <label htmlFor="">E-mail</label>
                  <input type="email" placeholder="@mail.com" />
               </div>
               <div className="form-group">
                  <label htmlFor="">Password</label>
                  <input type="password" className="error" placeholder="password" />

                  <div className="error-text">Debe tener al menos 8 caracteres</div>
               </div>
               <div className="form-group remember-forgot">
                  <div className="remember">
                     <input type="checkbox" id="yes" name="bydefault" value="yes" className="form-checkbox" />
                     <label htmlFor="yes">Recuerdame</label>
                  </div>
                  {/* <div className="forgot">
                     <a href="javascript:;" className="forgot-pass-link">Forgot Password?</a>
                  </div> */}
               </div>
               <div className="form-group">
                  <button>Iniciar sesión</button>
               </div>
               
               <div className="create-aacount">
                  ¿No tienes cuenta? <Link to="/register"><a  href="/#" className="go-to-sign-in">Registrate</a></Link>
               </div>
               {/* <div className="create-aacount">
                  Not registered yet? <a href="javascript:;" className="text-underline sign-up-form-btn"> Create an Account</a>
               </div> */}
            </form>
         </div>

      </div>

   
</>
    )
}