import React from 'react'
import NavbarUsuario from '../../Components/NavbarUsuario'
import Carrousel from '../../Components/Carrousel'

export default function Index() {
    return (
        <div>
            <NavbarUsuario />
            <div className="img position-absolute top-50 start-50 translate-middle row h-100"><img src="/LOGO.png" alt="" className='' /></div>
            <div className='container p-5 mt-5 table-responsive col col-sm-12'>
                <h1 className='text-white text-center display-1 anton fw-bold'>MASTER BARBER</h1>
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
            <div className="welcome bg-dark">
                <div className="container-fluid">
                    <div className="row">
                        <div class="col col-sm-6">
                            <img src="/MB1.JPG" alt="" className='img-fluid' />
                        </div>
                        <div class="col-12 col-sm-5 text-center p-5">
                            <h2 className='welcome-2 text-danger anton display-1'>Sobre Master Barber</h2>
                            <p className='text-white mt-5 pt-5'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Facere pariatur mollitia illo perspiciatis velit tempora fugiat neque ut,
                                dolorem laborum corrupti est officiis magni,
                                soluta nemo nobis eligendi repellat id!
                            </p>
                        </div>
                    </div>
                </div>
            </div>




            <div className="welcome container">
                <h1 className='text-center text-white display-1 anton'>NUESTROS SERVICIOS</h1>
                <p className='text-white mt-5 p-5 pt-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorum illo facere recusandae repellat adipisci, ducimus porro tempore deleniti corporis aliquam molestiae ipsa labore est et culpa quo sequi eveniet?</p>
                <div className="row justify-content-center mt-5 pt-5">
                    <div class="row">
                        <div class="col w-50">
                            <div class="card h-100 bg-dark">
                                <div class="card-body">
                                    <div className="text-center">
                                        <img src="/LOGO.PNG" class="w-50" alt="..." />
                                    </div>
                                    <h5 class="card-title text-danger text-center bebas mt-2">Servicio 1</h5>
                                    <p class="card-text text-center text-white mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at reprehenderit saepe debitis dolorum doloremque eligendi eveniet quis fuga nam, eos minima consequatur culpa ex, excepturi accusantium, doloribus illo laborum.</p>
                                    <div className="text-start">
                                        <button type="button" class="btn btn-outline-danger mt-5" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">Ver</button>

                                    </div>
                                </div>
                                <div class="offcanvas offcanvas-start bg-dark" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                                    <div class="offcanvas-header">
                                        <h5 class=" mt-5 pt-5 text-warning anton" id="staticBackdropLabel">Servicio 1</h5>
                                        <button type="button" class="btn-close mb-5 bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body text-white">
                                        <div>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet ex eos pariatur voluptatibus porro nemo harum ducimus excepturi placeat sed illum, iusto dolore expedita minima, eaque nostrum. Rerum, architecto culpa.
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-white text-white">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        <div class="col w-50">
                            <div class="card h-100 bg-dark">
                                <div className="text-center">
                                    <img src="/LOGO.PNG" class="w-50" alt="..." />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-danger text-center bebas">Servicio 2</h5>
                                    <p class="card-text text-white text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aspernatur excepturi quas qui sint recusandae! Doloribus, maiores cumque debitis at deserunt ullam corporis, veniam nesciunt sequi cupiditate delectus autem qui.</p>
                                    <div className="text-end">
                                        <button type="button" class="btn btn-outline-danger mt-5" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="staticBackdrop">Ver</button>
                                    </div>
                                </div>
                                <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                    <div class="offcanvas-header">
                                        <h5 class="offcanvas-title text-warning anton mt-5 pt-5" id="offcanvasRightLabel">Servicio 2</h5>
                                        <button type="button" class="btn-close mb-5 bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body text-white">
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ratione itaque dicta, amet dolorem, ea repellat aut asperiores accusantium quasi explicabo eum ipsam inventore quia ullam culpa. Ad, ab culpa!</p>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-white text-white">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <div className="welcome">
                <div className="container-fluid mt-5 pt-5">
                    <div className="row">
                        <div class="col-12 col-sm-7 text-center p-5 bg-dark">
                            <h2 className='text-warning anton display-5'>Lista de precios</h2>
                            <p className='text-white mt-5'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Facere pariatur mollitia illo perspiciatis velit tempora fugiat neque ut,
                                dolorem laborum corrupti est officiis magni,
                                soluta nemo nobis eligendi repellat id!
                            </p>
                            <div className="mt-5 pt-5">
                                <div className="border-bottom d-flex justify-content-between mt-4">
                                    <p className='text-white mx-3'>Corte Basico</p>
                                    <p className='text-warning mx-3'>18.000</p>
                                </div>
                                <div className="border-bottom d-flex justify-content-between mt-4">
                                    <p className='text-white mx-3'>Cejas</p>
                                    <p className='text-warning mx-3'>5.000</p>
                                </div>
                                <div className="border-bottom d-flex justify-content-between mt-4">
                                    <p className='text-white mx-3'>Figuras</p>
                                    <p className='text-warning mx-3'>5.000</p>
                                </div>
                                <div className="border-bottom d-flex justify-content-between mt-4">
                                    <p className='text-white mx-3'>Mascarillas</p>
                                    <p className='text-warning mx-3'>25.0000</p>
                                </div>
                                <div className="border-bottom d-flex justify-content-between mt-4">
                                    <p className='text-white mx-3'>Barbas</p>
                                    <p className='text-warning mx-3'>12.0000</p>
                                </div>
                                <div className="border-bottom d-flex justify-content-between mt-4">
                                    <p className='text-white mx-3'>Tintes</p>
                                    <p className='text-warning mx-3'>Depende Del Tinte</p>
                                </div>
                                <div className="border-bottom d-flex justify-content-between mt-4">
                                    <p className='text-white mx-3'>Corte Premium</p>
                                    <p className='text-warning mx-3'>55.000</p>
                                </div>
                            </div>

                        </div>
                        <div class="row col col-sm-5">
                            <img src="/MB2.JPG" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="welcome">
                <h1 className='text-center text-white display-1 anton'>CONOCE A NUESTROS ESTILISTAS</h1>
                <p className='text-white mt-5 p-5 pt-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorum illo facere recusandae repellat adipisci, ducimus porro tempore deleniti corporis aliquam molestiae ipsa labore est et culpa quo sequi eveniet?</p>
            </div>
            <div className="mt-5 pt-4">
                <Carrousel />
            </div>



            <div className="welcome">
                <h1 className='text-center text-white display-1 anton'>¡¡MASTER SHOP!!</h1>
                <Carrousel/>
            </div>


        </div >


    )
}