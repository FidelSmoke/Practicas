import React from 'react'
import NavbarUsuario from '../../Components/NavbarUsuario'

export default function Index() {
    return (
        <div>
            <NavbarUsuario />
            <div className="img position-fixed top-50 start-50 translate-middle row h-100"><img src="/LOGO.png" alt="" className='col-12' /></div>
            <div className='container p-5 mt-5 table-responsive'>
                <h1 className='text-white text-center display-1 anton fw-bold'>MASTER BARBER</h1>
                <h2 className='text-warning text-center mt-5 anton fw-bold'>BOGOTA</h2>
                <p className='text-white text-center mt-5 p-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium animi, cum quas delectus nulla voluptate velit, corrupti beatae in rerum sint, minima doloribus fugit officia quae dolor doloremque aspernatur voluptas!</p>

                <div className="justify-content-start mx-3 d-flex p-5 mt-5 table-responsive">
                    <h1 className='anton text-warning mx-5 '>DIRRECION
                        <p className='bebas text-white'>cra 4 este #37-38</p>
                    </h1>
                    <h1 className='anton text-warning mx-5 '>TELEFONO
                        <p className='bebas text-start text-white '>3142758305</p>
                    </h1>
                    <h1 className='anton text-warning mx-5 '>HORARIO
                        <p className='bebas  text-white'> 10am-8pm</p>
                    </h1>
                </div>
            </div>
            <section className='p-5 mt-5'>
                <div className="container p-5 mt-5">
                    <h1 className='anton text-white text-center'>SOBRE MASTER BARBER</h1>

                </div>
            </section>
        </div>
    )
}