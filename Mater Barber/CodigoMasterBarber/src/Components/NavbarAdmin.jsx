import React from 'react'


export default function NavbarAdmin() {
    return (
        <div className='border-bottom'>
            <div class="container-fluid">
                <a class="navbar-brand text-warning anton fs-2" href="#">Master Barber</a>
                <small class="text-white d-none d-sm-block fw-bold text-center">Bienvenido, Adminitrador</small>
                <div class="d-flex justify-content-end ">
                    <div class="dropdown position-absolute top-0 end-0 pe-4 me-4">
                        <button class="btn dropdown text-white mt-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-person-circle"></i>
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