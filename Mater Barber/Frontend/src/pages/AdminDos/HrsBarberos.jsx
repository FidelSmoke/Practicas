import React from 'react'
import NavbarAdmin from '../../Components/NavbarAdmin'
import SidebarAdmin from '../../Components/SidebarAdmin'

export default function HrsBarberos() {
  return (
    <div>
      <NavbarAdmin />
      <SidebarAdmin />
      <div className='contenido'>
        <p className='text-center text-white mt-5 display-6 bebas mx-3 '>HOLA <span className='text-danger'>ADMINISTRADOR</span>| ESTAS SON LAS HORAS DE LOS BARBEROS</p>
      </div>
    </div>
  )
}
