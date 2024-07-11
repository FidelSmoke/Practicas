import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/scss/bootstrap.scss'
import * as faIncons from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';
const Sidebar = () => {
    return (
        <div className="sidebar bg-light">
            <ul>
                 <li>
                      <NavLink to="/" exact className='text-dark rounded py-2 w-100 d-inline-block px-3'  activeClassName='active'><faIncons.FaHome className='me-2'/>Inicio</NavLink>
                </li>
                <li>
                      <NavLink to="/Sales" exact className='text-dark rounded py-2 w-100 d-inline-block px-3'  activeClassName='active'> <faIncons.FaRegChartBar className='me-2'/>
                      Ventas</NavLink>
                </li>
                <li>
                      <NavLink to="/Clients" exact className='text-dark rounded py-2 w-100 d-inline-block px-3'  activeClassName='active'> <faIncons.FaUserFriends className='me-2'/>Clientes</NavLink>
                </li>
            </ul>
        </div>
    )
}


export default Sidebar