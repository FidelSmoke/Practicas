import React from 'react'
import SidebarAdmin from '../../Components/SidebarAdmin'
import NavbarAdmin from '../../Components/NavbarAdmin'

export default function InicioAdmin2() {

    return (
        <div>
            <NavbarAdmin />
            <SidebarAdmin />
            <div className='contenido p-5 mt-5'>
                <p className='text-center text-white display-3 bebas mx-3'>MASTER <span className='text-danger'>BARBER</span>| INICIO </p>
                {/* <div className="container col border border mt-4 bg-dark row col contenido mt-5">
                        <h2 className='bebas text-center text-white mt-2'>Inicio</h2>
                    </div> */}
                <div className="row">
                    <div className="container col border border mt-5 bg-dark row col contenidol">
                        <h1 className='bebas text-center text-white mt-2'>MENUUUUUU</h1>
                        <div className='row'>
                            <div className="col col-sm-12">
                                <p className='mx-4  text-white antonparabackend mt-2 col'>links ayudas</p>
                                <p><a href="Inventario" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover mx-5 bebas">INVENTARIO</a></p>
                                <p><a href="Analisisdeventas" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover mx-5 bebas">ANALISISVENTAS</a></p>
                                <p><a href="GestionarBarberos" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover mx-5 bebas">GESTIONBARBEROS</a></p>
                                <p><a href="Gestiondeventas" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover mx-5 bebas">GESTIONVENTAS</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="container col border border mt-4 bg-dark row col mx-5 mt-5 ">
                        <h2 className='bebas text-center text-white mt-2'>Barberos Actuales</h2>
                    </div>
                    <div className="container col border border mt-4 bg-dark row col mx-2 mt-5 ">
                        <h2 className='bebas text-center text-white mt-2'>Reseñas</h2>
                    </div>
                </div>
                
                {/* <div className="container text-center d-flex border border mt-4 bg-dark row col-3 contenido2 mt-5 ">
                    <div class="row">
                        <div class="col-md-4">.col-md-4</div>
                        <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
                    </div>
                </div> */}
            </div>

        </div>

    )
}
