import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/scss/bootstrap.scss'
import * as faIncons from 'react-icons/fa'
import { BsBasket3Fill } from "react-icons/bs"
import { FaUserTie } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa";

export default function SidebarAdmin() {
      return (
            <div className=' sidebar2 border-end border-white vh-100'>
                  <ul>
                        <li>
                              <NavLink to="/ini" exact className=' rounded py-2 d-inline-block px-3 text-white fw-bold mb-2 mt-5 ' activeClassName='active'><faIncons.FaHome className='me-2' /><span className='d-none d-sm-flex col-sm-12'>Inicio</span></NavLink>
                        </li>
                        <li>
                              <NavLink to="/GestionarBarberos" exact className='rounded py-2  d-inline-block px-3 text-white fw-bold mb-2 mt-5 ' activeClassName='active'><IoPersonAddSharp className='me-2' /> <span className='d-none d-sm-flex col-sm-12'>add barbers</span></NavLink>
                        </li>
                        <li>
                              <NavLink to="/inicioadmin" exact className='rounded py-2 d-inline-block px-3 text-white fw-bold mb-2 mt-5 ' activeClassName='active'><BsBasket3Fill className='me-2' /><span className='d-none d-sm-flex col-sm-12'>inventario</span></NavLink>
                        </li>
                        {/* <li>
                              <NavLink to="/inicioadmin" exact className='rounded py-2 w-100 d-inline-block px-3 text-warning  mb-2' activeClassName='active'><FaUserTie className='me-2' /><span className='d-none d-sm-flex col-sm-12'>perfil</span></NavLink>
                        </li> */}
                  </ul>
            </div>
      )
}
