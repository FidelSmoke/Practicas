import React, { useState, useEffect } from "react";
import NavbarIndex from '../../Components/NavbarIndex'
import CarrouselShop from '../../Components/CarrouselShop'
import CarrouselGaleria from '../../Components/CarrouselGaleria'
import Swal from 'sweetalert2'
import Calificaciones from '../../Components/Calificaciones'
import Darkandlight from "../../Components/Dark and light";

export default function Index() {

    // CODIGO CALIFICACION
    const handleRating = (rating) => {
        Swal.fire({
            icon: 'success',
            title: 'Gracias por su opinion',
            text: `Calificaste con ${rating} estrellas`
        })
    };

    return (
        <div>
            <div className="mt-3"><Darkandlight/></div>
            <NavbarIndex />
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
            <div className="welcome bg-dark">
                <div className="container-fluid">
                    <div className="row">
                        <div class="col col-sm-6">
                            <img src="/MB1.JPG" alt="" className='img-fluid' />
                        </div>
                        <div class="col-12 col-sm-5 text-center p-5">
                            <h2 className='welcome-2 text-danger anton display-1'>Sobre Nosotros</h2>
                            <p className='text-white pt-5'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Facere pariatur mollitia illo perspiciatis velit tempora fugiat neque ut,
                                dolorem laborum corrupti est officiis magni,
                                soluta nemo nobis eligendi repellat id!
                            </p>
                        </div>
                    </div>
                </div>
            </div>




            <div className="welcome container" id='services'>
                <h1 className='text-center text-white display-1 anton'>NUESTROS SERVICIOS</h1>
                <p className='text-white mt-5 p-5 pt-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorum illo facere recusandae repellat adipisci, ducimus porro tempore deleniti corporis aliquam molestiae ipsa labore est et culpa quo sequi eveniet?</p>
                <div className="row justify-content-center mt-5 pt-5">
                    <div class="row">
                        <div class="col w-50">
                            <div class="card h-100 bg-dark">
                                <div class="card-body">
                                    <div className="text-center">
                                        <img src="/LOGO.png" class="w-50" alt="..." />
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
                                    <img src="/LOGO.png" class="w-50" alt="..." />
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






            <div className="welcome" id='prices'>
                <div className="container-fluid mt-5 pt-5">
                    <div className="row">
                        <div class="col-12 col-sm-7 text-center p-5 bg-dark">
                            <h2 className='text-white anton display-5'>Lista de precios</h2>
                            <p className='text-white mt-5'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Facere pariatur mollitia illo perspiciatis velit tempora fugiat neque ut,
                                dolorem laborum corrupti est officiis magni,
                                soluta nemo nobis eligendi repellat id!
                            </p>
                            <div className="mt-5 pt-5">
                                <div className="border-bottom d-flex justify-content-between mt-4">
                                    <p className='text-white mx-3'>Corte Basico</p>
                                    <p className='text-warning mx-3'>20.000</p>
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

            <div className="welcome" id='barbers'>
                <h1 className='text-center text-white display-1 anton'>CONOCE A NUESTROS ESTILISTAS</h1>
                <p className='text-white mt-5 pt-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorum illo facere recusandae repellat adipisci, ducimus porro tempore deleniti corporis aliquam molestiae ipsa labore est et culpa quo sequi eveniet?</p>
                <div className="container mt-5 pt-5">
                    <div class="row row-cols-1 row-cols-md-3">
                        <div class="col">
                            <div class="card bg-dark">
                                <img src="./B1.JPG" class="card-img-top img-fluid" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-danger text-center bebas">DEIBY</h5>
                                    <p class="card-text text-white text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-white text-white">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card bg-dark">
                                <img src="./B2.JPG" class="card-img-top img-fluid" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-danger text-center bebas">JEISON</h5>
                                    <p class="card-text text-white text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-white text-white">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card bg-dark">
                                <img src="./B3.JPG" class="card-img-top img-fluid" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-danger text-center bebas">NIXON</h5>
                                    <p class="card-text text-white text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-white text-white">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card bg-dark mt-5">
                                <img src="./LOGO.png" class="card-img-top img-fluid" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-danger text-center bebas mt-3">NOMBRE BARBERO</h5>
                                    <p class="card-text text-white text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-white text-white">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card bg-dark mt-5">
                                <img src="./LOGO.png" class="card-img-top img-fluid" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-danger text-center bebas mt-3">NOMBRE BARBERO</h5>
                                    <p class="card-text text-white text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-white text-white">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card bg-dark mt-5">
                                <img src="./LOGO.png" class="card-img-top img-fluid" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-danger text-center bebas mt-3">NOMBRE BARBERO</h5>
                                    <p class="card-text text-white text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-white text-white">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="welcome" id='shop'>
                <h1 className='text-center text-danger display-1 bebas'>¡¡MASTER SHOP!!</h1>
                <CarrouselShop />
            </div>

            <div className='welcome' id='turno'>
                <h1 className='text-center text-white display-1 bebas'>¿PORQUE RESERVAR CON NOSOTROS?</h1>

                <div className='container mt-5 p-5'>
                    <div class="accordion" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item bg-dark">
                            <h2 class="accordion-header">
                                <button class="accordion-button bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show text-white">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse bg-dark text-white">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse bg-dark text-white">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="welcome" id='galeria'>
                <h1 className='text-center text-danger display-1 anton'>GALERIA DE MASTER BARBER</h1>
                <div className="mt-5 pt-5 col-sm-12 col">
                    <CarrouselGaleria />
                </div>
            </div>


            <div className="welcome" id='ubicacion'>
                <h1 className='text-center text-white display-1 anton'>¿Como Llegar?</h1>
                <div className="container-fluid d-flex mt-5 row justify-content-center">
                    <iframe class="map mt-5 m-3 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.224597345888!2d-74.09438192628066!3d4.553574442918059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99e5c678c39f%3A0xe8d6bf03bd32ac11!2sMASTER%20BARBER%20VIP!5e0!3m2!1ses!2sco!4v1717791930339!5m2!1ses!2sco" height="560px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <img src="/Ubicacion.JPG" alt="" className=' mx-auto map mt-5 col m-3' height="560px" />
                </div>
            </div>

            <div className='text-white antonparabackend text-center pt-5' id='calificaciones'>
                <h1>Calificación con Estrellas</h1>
                <Calificaciones onRate={handleRating} />
            </div>



            <footer className="bg-dark text-center text-white mt-5">
                <p className='text-center text-white'>Copyright © 2022. Todos los derechos reservados. MASTER BARBER VIP</p>
            </footer>

        </div >


    )
}