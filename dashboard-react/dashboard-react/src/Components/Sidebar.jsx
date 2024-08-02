import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/scss/bootstrap.scss'
import * as faIncons from 'react-icons/fa'
import { BsBasket3Fill } from "react-icons/bs"
import { FaUserTie } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa";
const Sidebar = () => {
      return (
            <div className="sidebar rounded-end col-md-4">
                  <h1 className='text-center d-none d-sm-block mt-5 text-danger mb-4 '>Master Barber</h1>
                  <div className='nave'>
                        <ul>
                              <li>
                                    <NavLink to="/" exact className=' rounded py-2 w-100 d-inline-block px-3 text-danger mt-3' activeClassName='active'><faIncons.FaHome className='me-2' />Inicio</NavLink>
                              </li>
                              <li>
                                    <NavLink to="/AddBarberos" exact className=' rounded py-2 w-100 d-inline-block px-3 text-danger' activeClassName='active'><IoPersonAddSharp className='me-2' /> Add Barbers</NavLink>
                              </li>
                              <li>
                                    <NavLink to="/Inventario" exact className='rounded py-2 w-100 d-inline-block px-3 text-danger' activeClassName='active'><BsBasket3Fill className='me-2' />Inventario</NavLink>
                              </li>
                              <li>
                                    <NavLink to="/Perfil" exact className='rounded py-2 w-100 d-inline-block px-3 text-danger' activeClassName='active'><FaUserTie className='me-2' />Perfil</NavLink>
                              </li>
                        </ul>
                  </div>
                  
                        <div className="navbar d-flex align-items-end">
                              <small className='text-white mx-5 fs-6"'>Hola, Administrador</small><FaPowerOff className='mt-5 fs-5 text-danger' />
                        </div>
            
            </div>
      )
}
export default Sidebar