import React from 'react'
import NavbarUsuario from '../../Components/NavbarUsuario'

export default function Index() {
    return (
        <div className=''>
            <NavbarUsuario />
            <div className='container p-5 mt-5 img table-responsive'>
                <h1 className='text-white text-center display-1 anton '>MASTER BARBER</h1>
                <h2 className='text-warning text-center mt-5 anton '>BOGOTA</h2>
                <p className='text-white text-center mt-5 p-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium animi, cum quas delectus nulla voluptate velit, corrupti beatae in rerum sint, minima doloribus fugit officia quae dolor doloremque aspernatur voluptas!</p>

                <div className="container text-center d-flex p-5 mt-5">
                    <h1 className='anton text-warning mx-3'>DIRRECION
                        <p className='mx-3'>cra 4 este #37-38</p>
                    </h1>
                    <h1 className='anton text-warning mx-3'>TELEFONO
                        <p className='mx-3'>3142758305</p>
                    </h1>
                    <h1 className='anton text-warning mx-3'>HORARIO
                        <p className='mx-3'> 10am a 8pm</p>
                    </h1>
                </div>
            </div>


        </div>
    )
}