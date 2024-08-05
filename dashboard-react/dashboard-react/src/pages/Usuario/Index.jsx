import React from 'react'
import NavbarUsuario from '../../Components/NavbarUsuario'

export default function Index() {
    return (
        <div className=''>
            <NavbarUsuario />
            <div className="container pt-3 text-center position-relative mt-5">
                <h1 className='text-white text-center anton display-1'>MASTER BARBER</h1>
                <h2 className='text-white anton'> BOGOTA</h2>
                <img src="/LOGO.png" class='img-responsive w-75 opacity-25' alt="" />
                <h2 className='text-white anton'> BOGOTA</h2>

            </div>
        </div>
    )
}