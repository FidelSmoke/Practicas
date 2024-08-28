import React from 'react'


export default function SidebarAdmin() {
    return (
        <div className="rounded-end">
        <h1 className='text-center d-none d-sm-block mt-5 text-danger mb-4 '>Master Barber</h1>
        <div className='nave'>
              <ul>
                    <li>
                          <NavLink to="/inicioAdmin" exact className=' rounded py-2 w-100 d-inline-block px-3 text-danger mt-3' activeClassName='active'><faIncons.FaHome className='me-2' /><span className='d-none d-sm-flex col-sm-12'>Inicio</span></NavLink>
                    </li>
                    <li>
                          <NavLink to="/AddBarberos" exact className=' rounded py-2 w-100 d-inline-block px-3 text-danger' activeClassName='active'><IoPersonAddSharp className='me-2' /> <span className='d-none d-sm-flex col-sm-12'>add barbers</span></NavLink>
                    </li>
                    <li>
                          <NavLink to="/Inventario" exact className='rounded py-2 w-100 d-inline-block px-3 text-danger' activeClassName='active'><BsBasket3Fill className='me-2' /><span className='d-none d-sm-flex col-sm-12'>inventario</span></NavLink>
                    </li>
                    <li>
                          <NavLink to="/Perfil" exact className='rounded py-2 w-100 d-inline-block px-3 text-danger' activeClassName='active'><FaUserTie className='me-2' /><span className='d-none d-sm-flex col-sm-12'>perfil</span></NavLink>
                    </li>
              </ul>
        </div>
  <button class="btn dropdown-toggle text-white" type="button" data-bs-toggle="dropdown" aria-expanded="true"><i class="bi bi-person-square "></i>
        <ul class="dropdown-menu show bg-dark" data-bs-popper="static"><li><a class="dropdown-item text-warning" href="/InicioAdmin">Mi perfil</a></li><li><a class="dropdown-item text-warning" href="/InicioAdmin">Configuración</a></li><li><a class="dropdown-item text-danger" href="/InicioAdmin"><i class="bi bi-box-arrow-right"></i> Cerrar sesión</a></li></ul></button>

  </div>
    )
}