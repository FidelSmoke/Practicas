import 'bootstrap/scss/bootstrap.scss'
import React from 'react'
const Inventario = () => {
    return (
        <div>
            <h5 className='mt-5 text-center pb-3 pt-3 text-white'>MASTER BARBER | INVENTARIO</h5>

            <nav class="navbar bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand text-white">INVENTARIO MB</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"></input>
                            <button class="btn btn-outline-success" type="submit">Ir</button>
                    </form>
                </div>
            </nav>

            <table className=" table-dark table table-striped mt-5">
                <thead>
                    <tr>

                        <th scope="col">id</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>


        </div>

    )
}


export default Inventario