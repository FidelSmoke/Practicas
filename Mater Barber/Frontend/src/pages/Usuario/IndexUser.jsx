import React from 'react'
import NavbarUsuario from '../../Components/NavbarUsuario'

export default function Index() {
    return (
        <div>
            <NavbarUsuario />
            <div className="img position-absolute top-50 start-50 translate-middle row h-100 col-1 col-sm-12"><img src="/LOGO.png" alt="" className='' /></div>
            <div className='container p-5 mt-5 table-responsive col col-sm-12' id='home'>
                <h1 className='text-white text-center display-1 anton fw-bold'>MASTER BARBER VIP</h1>
                <h2 className='text-warning text-center mt-5 anton fw-bold'>BOGOTA</h2>
                <p className='text-white text-center mt-5 p-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium animi, cum quas delectus nulla voluptate velit, corrupti beatae in rerum sint, minima doloribus fugit officia quae dolor doloremque aspernatur voluptas!</p>
                <div className="mt-5 pt-5 d-flex justify-content-center">
                    <div className="row mt-5 pt-5 d-flex col-sm-14">
                        <h1 className='anton text-center text-warning mx-3 col'>DIRRECION
                            <p className='bebas text-center text-white'>cra 4 este #37-38</p>
                        </h1>
                        <h1 className='anton text-warning text-center mx-5 col'>TELEFONO
                            <p className='bebas text-center text-white '>3142758305</p>
                        </h1>
                        <h1 className='anton text-center text-warning mx-3 col'>HORARIO
                            <p className='bebas text-white text-center'> 10am-8pm</p>
                        </h1>
                    </div>
                </div>
            </div>







        </div >


    )
}