import React from 'react'
import NavbarUsuario from '../../Components/NavbarUsuario'

export default function Index() {
    return (
        <div>
            <NavbarUsuario />
            <div className="img position-absolute top-50 start-50 translate-middle row h-100"><img src="/LOGO.png" alt="" className='col-12' /></div>
            <div className='container p-5 mt-5 table-responsive'>
                <h1 className='text-white text-center display-1 anton fw-bold'>MASTER BARBER</h1>
                <h2 className='text-warning text-center mt-5 anton fw-bold'>BOGOTA</h2>
                <p className='text-white text-center mt-5 p-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium animi, cum quas delectus nulla voluptate velit, corrupti beatae in rerum sint, minima doloribus fugit officia quae dolor doloremque aspernatur voluptas!</p>

                <div className="row justify-content-start mx-3 d-flex p-5 mt-5 table-responsive">
                    <h1 className='anton text-warning mx-5 col'>DIRRECION
                        <p className='bebas text-white'>cra 4 este #37-38</p>
                    </h1>
                    <h1 className='anton text-warning mx-5 col'>TELEFONO
                        <p className='bebas text-start text-white '>3142758305</p>
                    </h1>
                    <h1 className='anton text-warning mx-5 col'>HORARIO
                        <p className='bebas  text-white'> 10am-8pm</p>
                    </h1>
                </div>
            </div>

            <section className=' welcome row'>
                <div className='welcome-1 col'></div>
                <div className="welcome-2">
                    <h1 className='anton text-danger text-center border-bottom' id='h1'>SOBRE MASTER BARBER</h1>
                    <p className='text-white p-5 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio libero expedita recusandae tempore porro minus non ullam nesciunt voluptatem odit pariatur, necessitatibus eaque eum natus aliquam. Doloribus voluptas ab possimus?</p>
                </div>
            </section>

            <section className='mt-5 pt-5'>
                <h1 className='text-center text-white display-1 anton'>NUESTROS SERVICIOS</h1>
                <p className='text-white mt-5 p-5 pt-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorum illo facere recusandae repellat adipisci, ducimus porro tempore deleniti corporis aliquam molestiae ipsa labore est et culpa quo sequi eveniet?</p>
                <div className='row mt-5 p-5 pt-5 mx-5 col'>
                    <div class="card bg-dark mx-5">
                        <img src="/LOGO.png" class="card-img-top " alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-danger text-center">Servicio 1</h5>
                            <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            <button class="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Ver</button>
                            <div class="offcanvas offcanvas-start bg-dark p-5" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title text-warning mt-5" id="offcanvasWithBothOptionsLabel">Servicio 1</h5>
                                    <button type="button" class="btn-close mb-5 bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body text-white mt-4">
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius iusto eveniet placeat illo numquam aut temporibus rem ab, veniam dolore atque nemo velit recusandae corporis fugit assumenda laborum suscipit nisi.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card float-end bg-dark mx-5">
                        <img src="/LOGO.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-danger text-center">Servivio 2</h5>
                            <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>



                            <a class="btn btn-danger" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                Ver
                            </a>
                            <div class="offcanvas offcanvas-end bg-dark p-5" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title mt-5 text-center text-warning" id="offcanvasExampleLabel">Servicio 2</h5>
                                    <button type="button" class="btn-close mb-5 bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <div className='text-white mt-4'>
                                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}