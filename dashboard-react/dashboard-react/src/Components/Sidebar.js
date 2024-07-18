import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/scss/bootstrap.scss'
import * as faIncons from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsBasket3Fill } from "react-icons/bs"
import { IoPersonAddSharp } from "react-icons/io5";
// import img from '../../public/logo512.png';
const Sidebar = () => {
    return (
        <div className="sidebar border-end">
            {/* <img src={img} /> */}
              <h1 className='fs-4 pt-3 pb-4 text-center d-none d-sm-block mt-4 text-warning' >Master Barber</h1>
            <div className='nave'>
            <ul>
                 <li>
                      <NavLink to="/" exact className=' rounded py-2 w-100 d-inline-block px-3 text-white'  activeClassName='active'><faIncons.FaHome className='me-2'/>Inicio</NavLink>
                </li>
                <li>
                      <NavLink to="/Ventas" exact className=' rounded py-2 w-100 d-inline-block px-3 text-white'  activeClassName='active'> <faIncons.FaRegChartBar className='me-2'/>
                      Ventas</NavLink>
                </li>
                {/* <li>
                      <NavLink to="/Clientes" exact className='text-dark rounded py-2 w-100 d-inline-block px-3'  activeClassName='active'> <faIncons.FaUserFriends className='me-2'/>Clientes</NavLink>
                </li> */}
                <li>
                      <NavLink to="/Barberos" exact className=' rounded py-2 w-100 d-inline-block px-3 text-white'  activeClassName='active'><    IoPersonAddSharp className='me-2' /> Add Barbers</NavLink>
                </li>
                <li>
                      <NavLink to="/Inventario" exact className='rounded py-2 w-100 d-inline-block px-3 text-white'  activeClassName='active'><BsBasket3Fill className='me-2' />Inventario</NavLink>
                </li>
            </ul>
            </div>
        </div>
        
    )
}


export default Sidebar