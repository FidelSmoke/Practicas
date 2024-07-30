import 'bootstrap/scss/bootstrap.scss'
import React from 'react'
import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import Swal from 'sweetalert2'

const inventario = () => {
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
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" >Añadir</button>
      </div>
      <table class="table table-dark table-hover mt-4">
        <thead>
          <tr>
            <th scope="col">Id_Producto</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Id_Categoria_Producto</th>
            <th scope="col">imagen</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">P1</th>
            <td>Camisetas Oversize</td>
            <td>Camisetas con estampado y horma grande</td>
            <td>20</td>
            <td>CP1</td>
            <td>@twitter</td>
            <td>78.000</td>
            <td><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
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
            <th scope="row">P2</th>
            <td>Gorras</td>
            <td>Gorras con diferentes estilos y variados colores</td>
            <td>10</td>
            <td>CP2</td>
            <td>@twitter</td>
            <td>50.000</td>
            <td><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
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
            <th scope="row">P3</th>
            <td>Aretes</td>
            <td>Aretes, expaciones, simulaciones, etc.</td>
            <td>50</td>
            <td>CP2</td>
            <td>@twitter</td>
            <td>20.000</td>
            <td><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
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
            <th scope="row">P4</th>
            <td>Mascarillas</td>
            <td>Mascarillas para puntos negros e hidratantes</td>
            <td>20</td>
            <td>CP3</td>
            <td>@twitter</td>
            <td>15.000</td>
            <td><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
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
            <th scope="row">P5</th>
            <td>Talcos para texturas</td>
            <td>Para un texturizado de cabello mas visible</td>
            <td>10</td>
            <td>CP3</td>
            <td>@twitter</td>
            <td>30.000</td>
            <td><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
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
            <th scope="row">P6</th>
            <td>Pierncings</td>
            <td>Piercings para la ceja, nariz, lengua, labio y de ...</td>
            <td>60</td>
            <td>CP2</td>
            <td>@twitter</td>
            <td>20.000</td>
            <td><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
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

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content bg-dark">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-white text-white" id="exampleModalLabel">Estas Apunto De Editar El inventario</h1>
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
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label text-white">Imagen:</label>
                  <input type="text" class="form-control" id="recipient-name" />
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
                  text: "¡Se Borrar Todo Lo Editado!",
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
    </div>

  )
}
export default inventario