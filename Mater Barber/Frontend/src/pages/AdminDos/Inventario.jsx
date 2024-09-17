import React, { useEffect } from 'react'
import NavbarAdmin from '../../Components/NavbarAdmin'
import SidebarAdmin from '../../Components/SidebarAdmin'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Inventario() {
    const [item, setItem] = useState({
        nombre: '',
        descripcion: '',
        cantidad: '',
        categoria: '',
        PrecioUnitario: ''
    });


    const navigate = useNavigate()

    const handleChange = (e) => {
        setItem(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post("http://localhost:8081/inventario", item);
            if (res.status === 200) {
                Swal.fire({
                    title: 'producto creado correctamente',
                    icon: 'success',
                    confirmButtonText: 'Continuar'
                })

                navigate("/inventario")
            }

        } catch (err) {
            console.log(err)
        }
    }



    const [inventario, setInventario] = useState([]);

    useEffect(() => {
        const fetchInventario = async () => {
            try {
                const res = await axios.get("http://localhost:8081/mostrar");
                setInventario(res.data)
                console.log(res)
            } catch (err) {
                console.log(err)
            }
        }
        fetchInventario()
    }, [])



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
                                    {inventario.map((item) => (
                                        <tr>
                                            <th >{item.id_producto}</th>
                                            <td>{item.nombre}</td>
                                            <td>{item.descripcion_P}</td>
                                            <td>{item.cantidad}</td>
                                            <td>{item.id_categoria_producto}</td>
                                            <td ><img src="/LOGO.png" alt="" srcset="" className='col-md-3 col-sm-12 img-fluid zoomhover containerzoom ' /></td>
                                            <td>{item.PrecioUnitario}</td>
                                            <td>
                                                <div className="d-flex">
                                                    <button type="button" class="btn btn-outline-warning .col-md-6" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
                                                    <i class="bi bi-trash-fill"></i>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
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
                                    <form >
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Id_producto:</label>
                                            <input type="text" class="form-control" name="producto" id="recipient-name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Nombre:</label>
                                            <input type="text" class="form-control" name="nombre" id="recipient-name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Descripcion:</label>
                                            <input type="text" class="form-control" name="descripcion" id="recipient-name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Cantidad:</label>
                                            <input type="text" class="form-control" name="cantidad" id="recipient-name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Id_Categoria_Producto:</label>
                                            <input type="text" class="form-control" name="categoria" id="recipient-name" />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="floatingInput" className='text-white'>Imagen</label>
                                            <input className='form-control' type="file" accept='image/*' autoComplete='off' id='photo' name='imagen' required />
                                        </div>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Precio:</label>
                                            <input type="text" class="form-control" name="precio" id="recipient-name" />
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                                    <button type="button" class="btn btn-danger">Editar</button>
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
                                    <form onSubmit={handleSubmit} >
                                        {/* <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Id_producto:</label>
                                            <input type="text" class="form-control" id="recipient-name" />
                                        </div> */}
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Nombre:</label>
                                            <input type="text" class="form-control" id="recipient-name" name='nombre' onChange={handleChange}/>
                                        </div>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Descripcion:</label>
                                            <input type="text" class="form-control" id="recipient-name" name='descripcion' onChange={handleChange}/>
                                        </div>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Cantidad:</label>
                                            <input type="text" class="form-control" id="recipient-name" name='cantidad' onChange={handleChange}/>
                                        </div >
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Categoria:</label>
                                            <select name="categoria" class="form-select" id="" onChange={handleChange}>
                                                <option selected disabled>Categoria</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label text-white">Precio:</label>
                                            <input type="text" class="form-control" id="recipient-name" name='precio' onChange={handleChange}/>
                                        </div>

                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-danger" onChange={handleSubmit}>Añadir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
