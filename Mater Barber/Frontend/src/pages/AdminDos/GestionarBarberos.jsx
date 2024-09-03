import React from 'react'
import NavbarAdmin from '../../Components/NavbarAdmin'
import SidebarAdmin from '../../Components/SidebarAdmin'
import Swal from 'sweetalert2'



export default function GestionarBarberos() {
  return (
    <div>
      <NavbarAdmin />
      <SidebarAdmin />
      <div>
        <p className='text-center  mt-5 text-white display-6 bebas col-sm-12 col'>HOLA, <span className='text-danger'>ADMINISTRADOR</span> |AQUI PODRAS EDITAR, AÑADIR Y ELIMINAR BARBEROS</p>

        <div className="d-flex justify-content-end mt-3 p-5 mx-5">
          <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#AñadirModal" data-bs-whatever="@mdo" >Añadir</button>
        </div>

        <div className=' text-center row col col-sm-12 justify-content-end'>
          <div className="table-responsive">
            <table class="table table-dark table-hover mt-4 container p-5">
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
                  <td>Esoecialista En......</td>
                  <td>@twitter</td>
                  <td className='.col-md-4'><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
                    <button className="btn btn-outline-danger mx-3" onClick={() => {
                      Swal.fire({
                        title: "¿Eliminar Barbero?",
                        text: "¡Se eliminara el Barbero!",
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
                              title: 'Barbero eliminado',
                              text: 'El Barbero fue eliminado correctamente.',
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
                  <td>Especialista En....</td>
                  <td>@twitter</td>
                  <td className='.col-md-4'><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
                    <button className="btn btn-outline-danger mx-3" onClick={() => {
                      Swal.fire({
                        title: "¿Eliminar Barbero?",
                        text: "¡Se eliminara el Barbero!",
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
                              title: 'Barbero eliminado',
                              text: 'El Barbero fue eliminado correctamente.',
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
                  <td>Especialista En.......</td>
                  <td>@twitter</td>
                  <td className='.col-md-4'><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
                    <button className="btn btn-outline-danger mx-3" onClick={() => {
                      Swal.fire({
                        title: "¿Eliminar Barbero?",
                        text: "¡Se eliminara el Barbero!",
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
                              title: 'Barbero eliminado',
                              text: 'El Barbero fue eliminado correctamente.',
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
                  <td>Especialista En.....</td>
                  <td>@twitter</td>
                  <td className='.col-md-4'><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
                    <button className="btn btn-outline-danger mx-3" onClick={() => {
                      Swal.fire({
                        title: "¿Eliminar Barbero?",
                        text: "¡Se eliminara el Barbero!",
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
                              title: 'Barbero eliminado',
                              text: 'El Barbero fue eliminado correctamente.',
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
                  <td>Especialista En.....</td>
                  <td>@twitter</td>
                  <td className='.col-md-4'><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
                    <button className="btn btn-outline-danger mx-3" onClick={() => {
                      Swal.fire({
                        title: "¿Eliminar Barbero?",
                        text: "¡Se eliminara el Barbero!",
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
                              title: 'Barbero eliminado',
                              text: 'El Barbero fue eliminado correctamente.',
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
                  <td>Especialista En...</td>
                  <td>@twitter</td>
                  <td className='.col-md-4'><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className='bi bi-pencil-fill text-white'></i></button>
                    <button className="btn btn-outline-danger mx-3" onClick={() => {
                      Swal.fire({
                        title: "¿Eliminar Barbero?",
                        text: "¡Se eliminara el Barbero!",
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
                              title: 'Barbero eliminado',
                              text: 'El Barbero fue eliminado correctamente.',
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

        {/* MODAL EDIT */}

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
                    <label for="recipient-name" class="col-form-label text-white">Nombre Barbero</label>
                    <input type="text" class="form-control" id="recipient-name" />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label text-white">Descripcion</label>
                    <input type="text" class="form-control" id="recipient-name" />
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="floatingInput" className='text-white'>Imagen</label>
                    <input className='form-control' type="file" accept='image/*' autoComplete='off' id='photo' name='photo' required />
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

        {/* MODAL AÑADIR */}

        <div class="modal fade" id="AñadirModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content bg-dark">
              <div class="modal-header">
                <h1 class="modal-title fs-5 text-white text-white" id="exampleModalLabel">Añadir</h1>
                <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label text-white">Nombre Barbero</label>
                    <input type="text" class="form-control" id="recipient-name" />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label text-white">Descripcion</label>
                    <input type="text" class="form-control" id="recipient-name" />
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="floatingInput" className='text-white'>Imagen</label>
                    <input className='form-control' type="file" accept='image/*' autoComplete='off' id='photo' name='photo' required />
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
  )
}
