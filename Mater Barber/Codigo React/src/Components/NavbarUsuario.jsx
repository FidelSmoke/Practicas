import React from 'react'


export default function NavbarUsuario() {
    return (
        <div className="">
            <nav class="navbar navbar-dark fixed-top mx-3 mt-3" >
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"></a>
                    <button class="navbar-toggler border border-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon "></span>
                    </button>
                    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title text-warning" id="offcanvasDarkNavbarLabel">Menu De Navegación</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#home"><i class="bi bi-arrow-right mx-3"></i>Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active mt-3" href="#services" type='submit'><i class="bi bi-arrow-right mx-3"></i>Servicios</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active mt-3" href="#prices"><i class="bi bi-arrow-right mx-3"></i>Precios</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active mt-3" href="#barbers"><i class="bi bi-arrow-right mx-3"></i>Nuestros Barberos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active mt-3" href="#shop"><i class="bi bi-arrow-right mx-3"></i>¡¡Master Shop!!</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active mt-3" href="#turno"><i class="bi bi-arrow-right mx-3"></i>¡¡Reserva Aqui!!</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active mt-3" href="#galeria"><i class="bi bi-arrow-right mx-3"></i>Nuestra Galeria</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active mt-3" href="#ubicacion"><i class="bi bi-arrow-right mx-3"></i>Ubicacion</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active mt-3" href="../Registro"><i class="bi bi-arrow-right mx-3"></i>Registrarme</a>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}