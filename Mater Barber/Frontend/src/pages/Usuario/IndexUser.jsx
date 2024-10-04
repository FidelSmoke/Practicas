import React from 'react'
import NavbarUserIndex from '../../Components/NavbarUserIndex'

export default function IndexUser() {
    return (
        <div>
            <NavbarUserIndex />
            <div className="img position-fixed top-50 start-50 translate-middle row h-100 col-1 col-sm-12 nab p-5"><img src="/LOGO.png" alt="" className='' /></div>
            <div className='container-fluid p-5 nab table-responsive col col-sm-12' id='home'>
                <h1 className='text-white text-center display-1 anton fw-bold'>MASTER BARBER VIP</h1>
                <h2 className='text-warning text-center mt-5 anton fw-bold'>BOGOTA</h2>
                <p className='text-white text-center mt-5 p-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium animi, cum quas delectus nulla voluptate velit, corrupti beatae in rerum sint, minima doloribus fugit officia quae dolor doloremque aspernatur voluptas!</p>

            </div >


        </div>)
}