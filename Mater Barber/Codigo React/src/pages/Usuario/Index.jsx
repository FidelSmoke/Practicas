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
            <div className="container mt-5 pt-5 ">
                <div className="row col-sm-12">
                    <div className="col col-sm-12">
                        <section className='welcome'>
                            <div className='welcome-1 col'></div>
                            <div className="welcome-2">
                                <h1 className='anton text-danger text-center border-bottom' id='h1'>SOBRE MASTER BARBER</h1>
                                <p className='text-white p-5 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio libero expedita recusandae tempore porro minus non ullam nesciunt voluptatem odit pariatur, necessitatibus eaque eum natus aliquam. Doloribus voluptas ab possimus?</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <section className='mt-5 pt-5'>
                            <h1 className='text-center text-white display-1 anton'>NUESTROS SERVICIOS</h1>
                            <p className='text-white mt-5 p-5 pt-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorum illo facere recusandae repellat adipisci, ducimus porro tempore deleniti corporis aliquam molestiae ipsa labore est et culpa quo sequi eveniet?</p>

                        </section>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <section class="prices mt-5 pt-5">
                            <div class="prices-1" id="precios">
                                <h2 className='text-warning anton text-center display-1'>Lista de precios</h2>
                                <p className='text-white mt-5 text-center'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Facere pariatur mollitia illo perspiciatis velit tempora fugiat neque ut,
                                    dolorem laborum corrupti est officiis magni,
                                    soluta nemo nobis eligendi repellat id!
                                </p>
                                <table class="table mt-5 pt-5">
                                    <tbody >
                                        <tr class="ff">
                                            <th className='th'>Corte Basico</th>
                                            <td>18.000</td>
                                        </tr>
                                        <tr class="ff">
                                            <th className='th'>Cejas</th>
                                            <td>5.000</td>
                                        </tr>
                                        <tr class="ff">
                                            <th className='th'>Figuras</th>
                                            <td className='text-warning'>5.000</td>
                                        </tr>
                                        <tr class="ff">
                                            <th className='th'>Mascarillas</th>
                                            <td>25.000</td>
                                        </tr>
                                        <tr class="ff">
                                            <th className='th'>Barbas</th>
                                            <td>12.000</td>
                                        </tr>
                                        <tr class="ff">
                                            <th className='th'>Tintes</th>
                                            <td>Depende del tinte</td>
                                        </tr>
                                        <tr class="ff">
                                            <th className='th'>Corte premium</th>
                                            <td>55.000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="prices-2"></div>
                        </section>
                    </div>
                </div>
            </div>


            <section className='mt-5 pt-5'>

            </section>
        </div>
    )
}