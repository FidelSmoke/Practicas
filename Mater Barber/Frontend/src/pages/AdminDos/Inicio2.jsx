import React from 'react'
import SidebarAdmin from '../../Components/SidebarAdmin'
import NavbarAdmin from '../../Components/NavbarAdmin'

export default function Inicio2() { 
    
    return (
        <div>
            <NavbarAdmin />
            <SidebarAdmin />
            <div className='contenido'>
                <p className='text-center text-white mt-5 display-6 bebas mx-3 '>BIENVENIDO <span className='text-danger'>ADMINISTRADOR</span>| </p>
            </div>

        </div>

            )
}
