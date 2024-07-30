import 'bootstrap/scss/bootstrap.scss'
import React from 'react'
import Swal from 'sweetalert2'
const addBarberos = () => {
    return (
        <div>
            <h5 className='mt-5 text-center pb-3 pt-3 text-white'>MASTER BARBER | INVENTARIO</h5>

            <nav class="navbar bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand text-white" href='#'>INVENTARIO MB</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"></input>
                        <button class="btn btn-outline-success" type="submit">Ir</button>
                    </form>
                </div>
            </nav>
            <div className="d-flex justify-content-end mx-5 mt-5">
                <button type="button" class="btn btn-danger">Añadir</button>
            </div>
            <table class="table table-dark table-hover mt-4">
                <thead>
                    <tr>
                        <th scope="col">Nombre Barbero</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">imagen Barbero</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Deiby</th>
                        <td>Camisetas con estampado y horma grande</td>
                        <td>@twitter</td>
                        <td><button className="btn btn-outline-warning"><i className='bi bi-pencil-fill text-white'></i></button>
                            <button className="btn btn-outline-danger mx-3" onClick={() => {
                                Swal.fire({
                                    title: "¿Eliminar Cliente?",
                                    text: "¡Se eliminara el cliente!",
                                    icon: 'question',
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "¡Si, eliminar!",
                                    cancelButtonText: "Cancelar"
                                }).then(
                                    (result) => {
                                        if (result.isConfirmed) {
                                            Swal.fire({
                                                title: 'Cliente eliminado',
                                                text: 'El cliente fue eliminado correctamente.',
                                                icon: 'success',
                                                confirmButtonText: 'Hecho'
                                            })
                                        }
                                    }
                                )
                            }}><i class="bi bi-trash-fill"></i></button></td>
                    </tr>
                    <tr>
                        <th scope="row">Jeison</th>
                        <td>Gorras con diferentes estilos y variados colores</td>
                        <td>@twitter</td>
                        <td><button className="btn btn-outline-warning"><i className='bi bi-pencil-fill text-white'></i></button>
                            <button className="btn btn-outline-danger mx-3" onClick={() => {
                                Swal.fire({
                                    title: "¿Eliminar Cliente?",
                                    text: "¡Se eliminara el cliente!",
                                    icon: 'question',
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "¡Si, eliminar!",
                                    cancelButtonText: "Cancelar"
                                }).then(
                                    (result) => {
                                        if (result.isConfirmed) {
                                            Swal.fire({
                                                title: 'Cliente eliminado',
                                                text: 'El cliente fue eliminado correctamente.',
                                                icon: 'success',
                                                confirmButtonText: 'Hecho'
                                            })
                                        }
                                    }
                                )
                            }}><i class="bi bi-trash-fill"></i></button></td>
                    </tr>
                    <tr>
                        <th scope="row">Eduardo</th>
                        <td>Aretes, expaciones, simulaciones, etc.</td>
                        <td>@twitter</td>
                        <td><button className="btn btn-outline-warning"><i className='bi bi-pencil-fill text-white'></i></button>
                            <button className="btn btn-outline-danger mx-3" onClick={() => {
                                Swal.fire({
                                    title: "¿Eliminar Cliente?",
                                    text: "¡Se eliminara el cliente!",
                                    icon: 'question',
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "¡Si, eliminar!",
                                    cancelButtonText: "Cancelar"
                                }).then(
                                    (result) => {
                                        if (result.isConfirmed) {
                                            Swal.fire({
                                                title: 'Cliente eliminado',
                                                text: 'El cliente fue eliminado correctamente.',
                                                icon: 'success',
                                                confirmButtonText: 'Hecho'
                                            })
                                        }
                                    }
                                )
                            }}><i class="bi bi-trash-fill"></i></button></td>
                    </tr>
                    <tr>
                        <th scope="row">Camilo</th>
                        <td>Mascarillas para puntos negros e hidratantes</td>
                        <td>@twitter</td>
                        <td><button className="btn btn-outline-warning"><i className='bi bi-pencil-fill text-white'></i></button>
                            <button className="btn btn-outline-danger mx-3" onClick={() => {
                                Swal.fire({
                                    title: "¿Eliminar Cliente?",
                                    text: "¡Se eliminara el cliente!",
                                    icon: 'question',
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "¡Si, eliminar!",
                                    cancelButtonText: "Cancelar"
                                }).then(
                                    (result) => {
                                        if (result.isConfirmed) {
                                            Swal.fire({
                                                title: 'Cliente eliminado',
                                                text: 'El cliente fue eliminado correctamente.',
                                                icon: 'success',
                                                confirmButtonText: 'Hecho'
                                            })
                                        }
                                    }
                                )
                            }}><i class="bi bi-trash-fill"></i></button></td>
                    </tr>
                    <tr>
                        <th scope="row">Cristian</th>
                        <td>Para un texturizado de cabello mas visible</td>
                        <td>@twitter</td>
                        <td><button className="btn btn-outline-warning"><i className='bi bi-pencil-fill text-white'></i></button>
                            <button className="btn btn-outline-danger mx-3" onClick={() => {
                                Swal.fire({
                                    title: "¿Eliminar Cliente?",
                                    text: "¡Se eliminara el cliente!",
                                    icon: 'question',
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "¡Si, eliminar!",
                                    cancelButtonText: "Cancelar"
                                }).then(
                                    (result) => {
                                        if (result.isConfirmed) {
                                            Swal.fire({
                                                title: 'Cliente eliminado',
                                                text: 'El cliente fue eliminado correctamente.',
                                                icon: 'success',
                                                confirmButtonText: 'Hecho'
                                            })
                                        }
                                    }
                                )
                            }}><i class="bi bi-trash-fill"></i></button></td>
                    </tr>
                    <tr>
                        <th scope="row">Jorge</th>
                        <td>Piercings para la ceja, nariz, lengua, labio y de ...</td>
                        <td>@twitter</td>
                        <td><button className="btn btn-outline-warning"><i className='bi bi-pencil-fill text-white'></i></button>
                            <button className="btn btn-outline-danger mx-3" onClick={() => {
                                Swal.fire({
                                    title: "¿Eliminar Cliente?",
                                    text: "¡Se eliminara el cliente!",
                                    icon: 'question',
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "¡Si, eliminar!",
                                    cancelButtonText: "Cancelar"
                                }).then(
                                    (result) => {
                                        if (result.isConfirmed) {
                                            Swal.fire({
                                                title: 'Cliente eliminado',
                                                text: 'El cliente fue eliminado correctamente.',
                                                icon: 'success',
                                                confirmButtonText: 'Hecho'
                                            })
                                        }
                                    }
                                )
                            }}><i class="bi bi-trash-fill"></i></button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default addBarberos