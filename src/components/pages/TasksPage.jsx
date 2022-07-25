import React, {useState, useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FloatingButton, Item } from "react-floating-button";
//assets
import logoutIcon from "../../assets/logout.svg";
import plusIcon from "../../assets/plus.svg";
//hooks
import useTasksCustomHook from '../../hooks/useTasksCustomHook'
//components
import SpinnerComponent from '../Spinner';
import ModalComponent from '../Modal';

import '../../App.css'

export default function TasksPage() {
    const navigate  = useNavigate();
    const { loading, tasks, add, update, remove } = useTasksCustomHook()
    const [modalIsOpen, setIsOpen] = useState(false);
    const [formValue, setFormValue] = useState({name:null, checked:false})
    const formElement = useRef();

  function openModal() {
    setIsOpen(!modalIsOpen);
  }

  function afterCloseModal() {
    if(formValue._id){
        update(formValue)
    }else{
        add(formValue)
    }
    // add({name: formData.get('name')})
    setIsOpen(false);
  }
  
  function closeModal() {
    setIsOpen(false);
  }
  function onEdit(e){
      setIsOpen(true);
      setFormValue(e)
        }
        function onCheck(e){
            setFormValue({...formValue,checked:!e.checked})
            update({...e,checked:!e.checked})
        }
    return (
        <>
        <ModalComponent modalIsOpen={modalIsOpen}
        afterCloseModal={afterCloseModal}
        closeModal={closeModal}
        >
            <form ref={formElement} action="">
                <div className="form-group">
                    <label htmlFor="">Tarea</label>
                    <textarea placeholder="Ingrese el nombre de su tarea" name="name" value={formValue.name} onChange={(event)=>setFormValue({...formValue,name:event.target.value})} ></textarea>
                </div>
            </form>
        </ModalComponent>
        {loading && <SpinnerComponent/>}
        <div className="left-inner">

      <div className="sign-up-form active">
         <h1>Administra tu lista de tareas</h1>


         <div className="seperator">
               <span>Tareas</span>
         </div>

         <div action="">
            {
                !tasks.length ?  <span>Sin tareas registradas</span> : <section>
                <ul>
                    {tasks.map(e => (
                        <li className="TodoItem" key={e._id}>
                        {/* className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} */}
                        {/* onClick={props.onComplete} */}
                        <span
                            className={`Icon Icon-check ${e.checked && 'Icon-check--active'}`}
                            onClick={() => onCheck(e)}
                        >
                        <FontAwesomeIcon size="1x" icon={faCheck} />
                        </span>
                        {/* className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`} */}
                        <p className={`TodoItem-p ${e.checked && 'TodoItem-p--complete'} `}>
                            {e.name}
                        </p>
                        {/* onClick={props.onDelete} */}
                        <div className="Icon-Actions">

                        <span
                            className="Icon Icon-edit"
                            onClick={() => onEdit(e)}
                            >
                            
                            <FontAwesomeIcon size="1x" icon={faEdit} />
                        </span>
                        <span
                            className="Icon Icon-delete"
                            onClick={() => remove(e)}
                            >
                            <FontAwesomeIcon size="1x" icon={faTrash} />
                        </span>
                            </div>
                    </li>
                    ))}
                
                </ul>
            </section>
            }
            
         
            <div className="create-aacount">
                <Link to="/"><a  href="/#" className="text-underline sign-in-form-btn"> Cerrar sesión </a></Link>
            </div>
         </div>
      </div>
      </div>
      <FloatingButton>
  <Item
    imgSrc={logoutIcon}
    onClick={() => {
        navigate('/');
    }}
  />
  <Item
    imgSrc={plusIcon}
    onClick={() => openModal()}
  />
</FloatingButton>
</>
    )
}