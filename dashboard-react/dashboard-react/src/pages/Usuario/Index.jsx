import React from 'react'
import NavbarUsuario from '../../Components/NavbarUsuario'

export default function Index() {
    return (
        <div>
            <NavbarUsuario />
            <div className="img position-absolute top-50 start-50 translate-middle row"><img src="/LOGO.png" alt="" className='col-md-12' /></div>
            <div className='container p-5 mt-5 table-responsive'>
                <h1 className='text-white text-center display-1 anton fw-bold'>MASTER BARBER</h1>
                <h2 className='text-warning text-center mt-5 anton fw-bold'>BOGOTA</h2>
                <p className='text-white text-center mt-5 p-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium animi, cum quas delectus nulla voluptate velit, corrupti beatae in rerum sint, minima doloribus fugit officia quae dolor doloremque aspernatur voluptas!</p>

                <div className="container text-center d-flex p-5 mt-5">
                    <h1 className='anton text-warning mx-3'>DIRRECION
                        <p className='bebas mx-3 text-white'>cra 4 este #37-38</p>
                    </h1>
                    <h1 className='anton text-warning mx-3'>TELEFONO
                        <p className='bebas mx-3 text-white'>3142758305</p>
                    </h1>
                    <h1 className='anton text-warning mx-3'>HORARIO
                        <p className='bebas mx-3 text-white'> 10am-8pm</p>
                    </h1>
                </div>
            </div>

            <div className="container">
                <h1 className='anton text-white text-center'>SOBRE MASTER BARBER</h1>
                <div className="welcome"><img src="/LOGO.png" alt="" /></div>
            </div>

        </div>
    )
}