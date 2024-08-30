import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/scss/bootstrap.scss'
import * as faIncons from 'react-icons/fa'
import { BsBasket3Fill } from "react-icons/bs"
import { IoPersonAddSharp } from "react-icons/io5";

export default function SidebarAdmin() {
      return (
            <div className='position-relative'>
                  <div className='min-vh-100 bg-dark border-end sidebar2 position-fixed shadow px-3 text-center justify-content-center'>

                              <li className='text-center align-items-center justify-content-center'>
                                    <NavLink to="/inicio2" exact className=' rounded d-block text-white fw-bold mt-5 w-100' activeClassName='active'><faIncons.FaHome className='me-2' /><span className='d-none d-lg-block'>Inicio</span></NavLink>
                              </li>
                              <li>
                                    <NavLink to="/GestionarBarberos" exact className='rounded d-inline-block  text-white fw-bold mt-5 w-100' activeClassName='active'><IoPersonAddSharp className='me-2' /> <span className='d-none d-lg-block'>Add Barberos</span></NavLink>
                              </li>
                              <li>
                                    <NavLink to="/HrsBarberos" exact className='rounded d-inline-block text-white fw-bold mt-5 w-100' activeClassName='active'><i class="bi bi-clock-fill"></i> <span className='d-none d-lg-block'>Horas Barberos</span></NavLink>
                              </li>

                              <li>
                                    <NavLink to="/Inventario2" exact className='rounded py-2 d-inline-block  text-white fw-bold mt-5 w-100' activeClassName='active'><BsBasket3Fill className='me-2' /><span className='d-none d-lg-block'>inventario</span></NavLink>
                              </li>
                        <li>
                              <NavLink to="/Ventas" exact className='rounded py-2 d-inline-block  text-white fw-bold mt-5 w-100' activeClassName='active'><i class="bi bi-bar-chart-fill"></i> <span className='d-none d-lg-block'>Ventas</span></NavLink>
                        </li>

                  </div>
            </div>

      )
}
