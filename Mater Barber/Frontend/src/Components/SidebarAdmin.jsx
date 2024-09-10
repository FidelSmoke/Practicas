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
                              <NavLink to="/inicioAdmin" exact className=' rounded d-block text-white fw-bold w-100 mt-5' activeClassName='active'><faIncons.FaHome className='me-2' /><span className='d-none d-lg-block'>Inicio</span></NavLink>
                        </li>
                        <li>
                              <NavLink to="/GestionarBarberos" exact className='rounded d-inline-block  text-white fw-bold w-100 ' activeClassName='active'><IoPersonAddSharp className='me-2' /> <span className='d-none d-lg-block'>Barberos</span></NavLink>
                        </li>
                        <li>
                              <NavLink to="/HrsBarberos" exact className='rounded d-inline-block text-white fw-bold w-100' activeClassName='active'><i class="bi bi-clock-fill"></i> <span className='d-none d-lg-block'>Horas Barberos</span></NavLink>
                        </li>

                        <li>
                              <NavLink to="/Inventario" exact className='rounded py-2 d-inline-block  text-white fw-bold w-100' activeClassName='active'><BsBasket3Fill className='me-2' /><span className='d-none d-lg-block'>inventario</span></NavLink>
                        </li>
                        <li>
                              <NavLink to="/Gestiondeventas" exact className='rounded py-2 d-inline-block  text-white fw-bold w-100' activeClassName='active'><i class="bi bi-bar-chart-fill"></i> <span className='d-none d-lg-block'>Gestion De Ventas</span></NavLink>
                        </li>
                        <li>
                              <NavLink to="/Analisisdeventas" exact className='rounded py-2 d-inline-block  text-white fw-bold w-100' activeClassName='active'><i class="bi bi-graph-up"></i> <span className='d-none d-lg-block'>Analisis De Ventas</span></NavLink>
                        </li>

                  </div>
            </div>

      )
}
