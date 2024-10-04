import React from 'react'



export default function NavbarUserIndex() {
    return (
        <div className='navbar shadow'>
            <div class="container-fluid">
                <div class="">
                    {/* <small className='d-none d-sm-block fs-4 fw-bold text-white mt-1 mx-3'>BIENVENIDO</small> */}



                    <button type="button" class="btn btn-dark border-light position-absolute mt-3 position-absolute top-0 end-0 translate-middle-x" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                        <i class="bi bi-alarm-fill"></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidden">unread messages</span></span>
                    </button>

                    <ul class="nav nav-underline mx-4 mt-3 position-absolute top-0 start-50 text-center translate-middle-x">
                        <li class="nav-item">
                            <a class="nav-link mx-5 text-primary" href="#">Link</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link mx-5 text-primary" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-5 text-primary" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-5 text-primary" href="#">Link</a>
                        </li>

                    </ul>



                    <div class="dropdown pe-4 me-4" >
                        <button class=" btn dropdown text-white d-none d-sm-block mx-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-person-circle fs-2"></i>
                        </button>
                        <ul class="dropdown-menu bg-dark">
                            <li>
                                <a class="dropdown-item bebas text-white " href="/PerfilAdmin">Perfil</a>
                            </li>
                            <li>
                                <a class="dropdown-item bebas text-white" href="/ConfiguracionAdmin">Configuración</a>
                            </li>
                            <li>
                                <a class="dropdown-item text-danger bebas" href="#">
                                    <i class="bi bi-box-arrow-right mx-1">
                                    </i> Cerrar sesión</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Modal Para Notificaciones */}
            <div class="offcanvas offcanvas-top bg-dark" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title text-white" id="offcanvasTopLabel"><i class="bi bi-alarm-fill mx-4 text-warning"></i>Mis Reservas</h5>
                    <button type="button" class="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
            </div>
        </div>
    )
}