import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/scss/bootstrap.scss'
import * as faIncons from 'react-icons/fa'
import { BsBasket3Fill } from "react-icons/bs"
import { IoPersonAddSharp } from "react-icons/io5";
const Sidebar = () => {
    return (
        <div className="sidebar border-end">
              <h1 className='fs-4 pt-3 pb-4 text-center d-none d-sm-block mt-4 text-warning mb-4' >Master Barber</h1>
            <div className='nave'>
            <ul>
                 <li>
                      <NavLink to="/" exact className=' rounded py-2 w-100 d-inline-block px-3 text-warning mt-3'  activeClassName='active'><faIncons.FaHome className='me-2'/>Inicio</NavLink>
                </li>
                <li>
                      <NavLink to="/AddBarberos" exact className=' rounded py-2 w-100 d-inline-block px-3 text-warning'  activeClassName='active'><IoPersonAddSharp className='me-2' /> Add Barbers</NavLink>
                </li>
                <li>
                      <NavLink to="/Inventario" exact className='rounded py-2 w-100 d-inline-block px-3 text-warning'  activeClassName='active'><BsBasket3Fill className='me-2' />Inventario</NavLink>
                </li>
            </ul>
            </div>
        </div>
        
    )
}


export default Sidebar