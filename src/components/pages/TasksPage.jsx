import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

import '../../App.css'

export default function TasksPage() {
    return (
        <>
        <div className="left-inner">

      <div className="sign-up-form active">
         <h1>Administra tu lista de tareas</h1>


         <div className="seperator">
               <span>Tareas</span>
         </div>

         <div action="">
            <section>
                <ul>
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(e => (
                        <li className="TodoItem" key={e}>
                        {/* className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} */}
                        {/* onClick={props.onComplete} */}
                        <span
                            className={`Icon Icon-check Icon-check--active`}
                        >
                        <FontAwesomeIcon size="1x" icon={faCheck} />
                        </span>
                        {/* className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`} */}
                        <p className={`TodoItem-p TodoItem-p--complete`}>
                            prueba{e}
                        </p>
                        {/* onClick={props.onDelete} */}
                        <div className="Icon-Actions">

                        <span
                            className="Icon Icon-edit"
                            >
                            
                            <FontAwesomeIcon size="1x" icon={faEdit} />
                        </span>
                        <span
                            className="Icon Icon-delete"
                            >
                            <FontAwesomeIcon size="1x" icon={faTrash} />
                        </span>
                            </div>
                    </li>
                    ))}
                
                </ul>
            </section>
         
            <div className="create-aacount">
                <Link to="/"><a  href="/#" className="text-underline sign-in-form-btn"> Cerrar sesión </a></Link>
            </div>
         </div>
      </div>
      </div>
   
</>
    )
}