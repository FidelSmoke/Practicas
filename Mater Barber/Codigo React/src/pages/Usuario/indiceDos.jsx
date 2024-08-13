import 'bootstrap/scss/bootstrap.scss'
import React from 'react'
import NavbarUsuario from '../../Components/NavbarUsuario'


export default function IndiceDos() {
    return (
        <div className="container">
            <NavbarUsuario />
            <div className="row">
                <div className="col">
                    <div className="img position-absolute top-50 start-50 translate-middle row h-100"><img src="/LOGO.png" alt="" className='col-12' /></div>
                </div>
            </div>
        </div>
    )
}