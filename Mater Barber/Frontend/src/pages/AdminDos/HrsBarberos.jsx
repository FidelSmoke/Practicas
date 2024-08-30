import React from 'react'
import NavbarAdmin from '../../Components/NavbarAdmin'
import SidebarAdmin from '../../Components/SidebarAdmin'

export default function HrsBarberos() {
  return (
    <div>
      <NavbarAdmin />
      <SidebarAdmin />
      <div>
        <p className='text-center pb-3 pt-3 text-white mx-5'>BIENVENIDO ADMINISTRADOR | ESTE ES EL ANALISIS DE VENTAS</p>
        <div className="container-fluid">
          <div className="row">
          </div>
        </div>
      </div>

    </div>
  )
}
