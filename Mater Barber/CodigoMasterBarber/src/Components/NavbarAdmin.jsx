import React from 'react'


export default function NavbarAdmin() {
    return (
        <div className='navbar border-bottom'>
            <div class="container-fluid">
                <a class="navbar-brand text-warning anton fs-2" href="#">  <img src="LOGO.png" alt="" width="40" height="40" class="d-inline-block align-text-top mx-4 mt-1" />
                    Master Barber</a>
                <div class="d-flex ">
                    <small className='d-none d-sm-block mx-5 mt-1 fw-bold text-white'>BIENVENIDO ADMINISTRADOR</small>
                    <div class="dropdown btn-group dropstart position-absolute top-0 end-0 pe-2 me-2" >
                        <button class="navbar btn dropdown text-white mt-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="bi bi-person-circle fs-3"></i>
                        </button>
                        <ul class="dropdown-menu bg-dark">
                            <li>
                                <a class="dropdown-item bebas text-danger" href="#">Perfil</a>
                            </li>
                            <li>
                                <a class="dropdown-item bebas text-danger" href="#">Configuración</a>
                            </li>
                            <li>
                                <a class="dropdown-item text-warning bebas" href="#">
                                    <i class="bi bi-box-arrow-right mx-1">
                                    </i> Cerrar sesión</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}