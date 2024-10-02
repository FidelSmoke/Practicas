import React from 'react'
import Navbaruserinde from '../../Components/Navbaruserinde'

export default function IndexUser() {
    return (
        <div>
            <Navbaruserinde/>
            <div className="img position-absolute top-50 start-50 translate-middle row h-100 col-1 col-sm-12 nave"><img src="/LOGO.png" alt="" className='' /></div>
            <div className='container p-5 nave col col-sm-12' id='home'>
                <h1 className='text-white text-center display-1 anton fw-bold'>MASTER BARBER VIP</h1>
                <h2 className='text-warning text-center mt-5 anton fw-bold'>BOGOTA</h2>
                <p className='text-white text-center mt-5 p-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium animi, cum quas delectus nulla voluptate velit, corrupti beatae in rerum sint, minima doloribus fugit officia quae dolor doloremque aspernatur voluptas!</p>
                <div className="mt-5 pt-5 d-flex justify-content-center">
                </div>
            </div>




        </div >


    )
}