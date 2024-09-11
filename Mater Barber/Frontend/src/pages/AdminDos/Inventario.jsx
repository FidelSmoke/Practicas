import React from 'react'
import NavbarAdmin from '../../Components/NavbarAdmin'
import SidebarAdmin from '../../Components/SidebarAdmin'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Inventario2() {
    const [products, setProducts] = useState([])
    

    return (
        <div>
            <NavbarAdmin />
            <SidebarAdmin />
            <div>
                <div className='contenido'>
                    <p className='text-center text-white mt-5 display-6 bebas mx-3 '>HOLA, <span className='text-danger'>ADMINISTRADOR</span>| ESTE ES EL INVENTARIO DE PRODUCTOS</p>

                    <div className="d-flex justify-content-end mx-5 mt-5">
                        <button type="button" class="btn btn-danger .col-md-4" data-bs-toggle="modal" data-bs-target="#AñadirModal" data-bs-whatever="@mdo" >Añadir</button>
                    </div>




                    <div className='container text-center'>
                        <div className="table-responsive">
                            <table class="table table-dark mt-5">
                                <thead>
                                    <tr>
                                        <th >Id Producto</th>
                                        <th >Nombre</th>
                                        <th >Descripcion</th>
                                        <th >Cantidad</th>
                                        <th >Categoria producto</th>
                                        <th>Imagen</th>
                                        <th >PrecioUnitario</th>
                                        <th >Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th >P1</th>
                                        <td>Camisetas Oversize</td>
                                        <td>Camisetas con estampado y horma grande</td>
                                        <td>20</td>
                                        <td>CP1</td>
                                        <td ><img src="/LOGO.png" alt="" srcset="" className='col-md-3 col-sm-12 img-fluid zoomhover containerzoom ' /></td>
                                        <td >78.000</td>
                                        <td><button type="button" class="btn btn-outline-warning .col-md-6" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
                                            <button className="btn btn-outline-danger mt-1" onClick={() => {
                                                Swal.fire({
                                                    title: "¿Eliminar Producto?",
                                                    text: "¡Se eliminara el Producto!",
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
                                                                title: 'Producto eliminado',
                                                                text: 'El Producto fue eliminado correctamente.',
                                                                icon: 'success',
                                                                confirmButtonText: 'Hecho'
                                                            })
                                                        }
                                                    }
                                                )
                                            }}><i class="bi bi-trash-fill"></i></button></td>
                                    </tr>
                                    <tr>
                                        <th>P2</th>
                                        <td>Gorras</td>
                                        <td>Gorras con diferentes estilos y variados colores</td>
                                        <td>10</td>
                                        <td>CP2</td>
                                        <td><img src="/LOGO.png" alt="" srcset="" className='col-md-3 col-sm-12 img-fluid zoomhover containerzoom ' /></td>
                                        <td>50.000</td>
                                        <td><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
                                            <button className="btn btn-outline-danger mt-1" onClick={() => {
                                                Swal.fire({
                                                    title: "¿Eliminar Producto?",
                                                    text: "¡Se eliminara el Producto!",
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
                                                                title: 'Producto eliminado',
                                                                text: 'El Producto fue eliminado correctamente.',
                                                                icon: 'success',
                                                                confirmButtonText: 'Hecho'
                                                            })
                                                        }
                                                    }
                                                )
                                            }}><i class="bi bi-trash-fill"></i></button></td>
                                    </tr>
                                    <tr>
                                        <th>P3</th>
                                        <td>Aretes</td>
                                        <td>Aretes, expaciones, simulaciones, etc.</td>
                                        <td>50</td>
                                        <td>CP2</td>
                                        <td><img src="/LOGO.png" alt="" srcset="" className='col-md-3 col-sm-12 img-fluid zoomhover containerzoom ' /></td>
                                        <td>20.000</td>
                                        <td ><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
                                            <button className="btn btn-outline-danger mt-1" onClick={() => {
                                                Swal.fire({
                                                    title: "¿Eliminar Producto?",
                                                    text: "¡Se eliminara el Producto!",
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
                                                                title: 'Producto eliminado',
                                                                text: 'El Producto fue eliminado correctamente.',
                                                                icon: 'success',
                                                                confirmButtonText: 'Hecho'
                                                            })
                                                        }
                                                    }
                                                )
                                            }}><i class="bi bi-trash-fill"></i></button></td>
                                    </tr>
                                    <tr>
                                        <th >P4</th>
                                        <td>Mascarillas</td>
                                        <td>Mascarillas para puntos negros e hidratantes</td>
                                        <td>20</td>
                                        <td>CP3</td>
                                        <td><img src="/LOGO.png" alt="" srcset="" className='col-md-3 col-sm-12 img-fluid zoomhover containerzoom ' /></td>
                                        <td>15.000</td>
                                        <td><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
                                            <button className="btn btn-outline-danger mt-1" onClick={() => {
                                                Swal.fire({
                                                    title: "¿Eliminar Producto?",
                                                    text: "¡Se eliminara el Producto!",
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
                                                                title: 'Cliente elProducto',
                                                                text: 'El cliente fue eliminado correProducto.',
                                                                icon: 'success',
                                                                confirmButtonText: 'Hecho'
                                                            })
                                                        }
                                                    }
                                                )
                                            }}><i class="bi bi-trash-fill"></i></button></td>
                                    </tr>
                                    <tr>
                                        <th>P5</th>
                                        <td>Talcos para texturas</td>
                                        <td>Para un texturizado de cabello mas visible</td>
                                        <td>10</td>
                                        <td>CP3</td>
                                        <td><img src="/LOGO.png" alt="" srcset="" className='col-md-3 col-sm-12 img-fluid zoomhover containerzoom ' /></td>
                                        <td>30.000</td>
                                        <td><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
                                            <button className="btn btn-outline-danger mt-1" onClick={() => {
                                                Swal.fire({
                                                    title: "¿Eliminar Producto?",
                                                    text: "¡Se eliminara el Producto!",
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
                                                                title: 'Producto eliminado',
                                                                text: 'El Producto fue eliminado correctamente.',
                                                                icon: 'success',
                                                                confirmButtonText: 'Hecho'
                                                            })
                                                        }
                                                    }
                                                )
                                            }}><i class="bi bi-trash-fill"></i></button></td>
                                    </tr>
                                    <tr>
                                        <th>P6</th>
                                        <td>Pierncings</td>
                                        <td>Piercings para la ceja, nariz, lengua, labio y de ...</td>
                                        <td>60</td>
                                        <td>CP2</td>
                                        <td><img src="/LOGO.png" alt="" srcset="" className='col-md-3 col-sm-12 img-fluid zoomhover containerzoom ' /></td>
                                        <td>20.000</td>
                                        <td><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
                                            <button className="btn btn-outline-danger mt-1" onClick={() => {
                                                Swal.fire({
                                                    title: "¿Eliminar Producto?",
                                                    text: "¡Se eliminara el Producto!",
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
                                                                title: 'Producto eliminado',
                                                                text: 'El Producto fue eliminado correctamente.',
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

                    </div>

                    {/* MODAL EDITAR */}

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content bg-dark">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-white text-white" id="exampleModalLabel">EDITAR</h1>
                                    <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Id_producto:</label>
                                            <input type="text" class="form-control" id="recipient-name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Nombre:</label>
                                            <input type="text" class="form-control" id="recipient-name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Descripcion:</label>
                                            <input type="text" class="form-control" id="recipient-name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Cantidad:</label>
                                            <input type="text" class="form-control" id="recipient-name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Id_Categoria_Producto:</label>
                                            <input type="text" class="form-control" id="recipient-name" />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="floatingInput" className='text-white'>Imagen</label>
                                            <input className='form-control' type="file" accept='image/*' autoComplete='off' id='photo' name='photo' required />
                                        </div>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Precio:</label>
                                            <input type="text" class="form-control" id="recipient-name" />
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {
                                        Swal.fire({
                                            title: "¿Estas Seguro De Terminar Este Proceso?",
                                            text: "¡Se Borrara Todo Lo Editado!",
                                            icon: 'question',
                                            showCancelButton: true,
                                            confirmButtonColor: "#3085d6",
                                            cancelButtonColor: "#d33",
                                            confirmButtonText: "¡Si, Cerrar!",
                                            cancelButtonText: "Cancelar"
                                        }).then(
                                            (result) => {
                                                if (result.isConfirmed) {
                                                    Swal.fire({
                                                        title: 'Cerrado',
                                                        text: 'Se Ah Cerrado Correctamente.',
                                                        icon: 'success',
                                                        confirmButtonText: 'Hecho'
                                                    })
                                                }
                                            }
                                        )
                                    }}>Close</button>
                                    <button type="button" class="btn btn-danger" onClick={() => {
                                        Swal.fire({
                                            position: "top-end",
                                            icon: "success",
                                            title: "Se Ah Editado Correctamente",
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                    }}>Editar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MODAL DE AÑADIR */}

                    <div class="modal fade" id="AñadirModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content bg-dark">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-white text-white" id="exampleModalLabel">AÑADIR</h1>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        {/* <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Id_producto:</label>
                                            <input type="text" class="form-control" id="recipient-name" />
                                        </div> */}
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Nombre:</label>
                                            <input type="text" class="form-control" id="recipient-name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Descripcion:</label>
                                            <input type="text" class="form-control" id="recipient-name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Cantidad:</label>
                                            <input type="text" class="form-control" id="recipient-name" />
                                        </div>
                                        {/* <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Id_Categoria_Producto:</label>
                                            <input type="text" class="form-control" id="recipient-name" />
                                        </div> */}
                                        <div className="col-12 mb-3">
                                            <label htmlFor="floatingInput" className='text-white'>Imagen</label>
                                            <input className='form-control' type="file" accept='image/*' autoComplete='off' id='photo' name='photo' required />
                                        </div>
                                        
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Precio:</label>
                                            <input type="text" class="form-control" id="recipient-name" />
                                        </div>
                                       
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {
                                        Swal.fire({
                                            title: "¿Estas Seguro De Terminar Este Proceso?",
                                            text: "¡Se Borrara Todo Lo Anterior!",
                                            icon: 'question',
                                            showCancelButton: true,
                                            confirmButtonColor: "#3085d6",
                                            cancelButtonColor: "#d33",
                                            confirmButtonText: "¡Si, Cerrar!",
                                            cancelButtonText: "Cancelar"
                                        }).then(
                                            (result) => {
                                                if (result.isConfirmed) {
                                                    Swal.fire({
                                                        title: 'Cerrado',
                                                        text: 'Se Ah Cerrado Correctamente.',
                                                        icon: 'success',
                                                        confirmButtonText: 'Hecho'
                                                    })
                                                }
                                            }
                                        )
                                    }}>Close</button>
                                    <button type="button" class="btn btn-danger" onClick={() => {
                                        Swal.fire({
                                            position: "top-end",
                                            icon: "success",
                                            title: "Se Ah Añadido Correctamente",
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                    }}>Añadir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
