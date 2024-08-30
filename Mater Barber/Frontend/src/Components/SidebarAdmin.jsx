import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/scss/bootstrap.scss'
import * as faIncons from 'react-icons/fa'
import { BsBasket3Fill } from "react-icons/bs"
import { IoPersonAddSharp } from "react-icons/io5";

export default function SidebarAdmin() {
      return (
            <div className=' sidebar2 border-end border-white vh-100'>
                  <ul >
                        <li>
                              <NavLink to="/inicio2" exact className=' rounded d-inline-block px-3 text-white fw-bold mt-5' activeClassName='active'><faIncons.FaHome className='me-2' /><span className='d-none d-sm-flex col-sm-12 col'>Inicio</span></NavLink>
                        </li>
                        <li>
                              <NavLink to="/GestionarBarberos" exact className='rounded d-inline-block px-3 text-white fw-bold mt-5' activeClassName='active'><IoPersonAddSharp className='me-2' /> <span className='d-none d-sm-flex col-sm-12 col'>Add Barberos</span></NavLink>
                        </li>
                        <li>
                              <NavLink to="/HrsBarberos" exact className='rounded d-inline-block px-3 text-white fw-bold mt-5' activeClassName='active'><i class="bi bi-clock-fill"></i> <span className='d-none d-sm-flex col-sm-12 col'>Horas Barberos</span></NavLink>
                        </li>
                     
                        <li>
                              <NavLink to="/Inventario2" exact className='rounded py-2 d-inline-block px-3 text-white fw-bold mt-5' activeClassName='active'><BsBasket3Fill className='me-2' /><span className='d-none d-sm-flex col-sm-12 col'>inventario</span></NavLink>
                        </li>
                       
                  </ul>
            </div>
      )
}
